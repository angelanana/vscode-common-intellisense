const fsp = require('node:fs/promises')
const path = require('path')
const process = require('process')
const data = require('./viewUiV4.data.json')

function copyToClipboard(text) {
  const textArea = document.createElement('textarea');
  textArea.value = text;
  document.body.appendChild(textArea);
  textArea.select();
  textArea.setSelectionRange(0, 99999); // 选中全部内容
  document.execCommand('copy');
  document.body.removeChild(textArea);
}
function run() {
  const link = location.href
  const [name, tag] = document.querySelector('article h1').textContent.split(' ')
  const tables = document.querySelectorAll('.api table')
  const data = {}
  tables.forEach(table => {
    // let [content, type] = table.previousElementSibling.textContent.trim().split(' ')
    let content, type;
    if (table.previousElementSibling) {
      [content, type] = table.previousElementSibling.textContent.trim().split(' ');
    } else {
      // Skip this iteration if there's no previous sibling
      return;
    }
    if ((/H[23]/.test(table.previousElementSibling.previousElementSibling.tagName)) && table.previousElementSibling.previousElementSibling.textContent.toLowerCase() !== 'api') {
      type = content
      if (table.previousElementSibling.previousElementSibling.textContent.toLowerCase() === 'methods') {
        type = 'methods'
        content = name
      } else
        content = table.previousElementSibling.previousElementSibling.textContent.trim()
    }
    if (content.toLowerCase() === 'ref') {
      type = 'methods'
      content = name
    }
    if (content === '方法') {
      type = 'methods'
      content = name
    }
    if (!type) {
      type = content
      content = name
    }
  
    if (!['props', 'slot', 'events', 'methods'].includes(type.toLowerCase()))
      return
    if (!data[content])
      data[content] = {}
    data[content][type.toLowerCase()] = table.querySelectorAll('tbody > tr')
  })
  console.log({data})
  const description = document.querySelector('article p').textContent
  const description_zh = description
  const results = []
  for (const key in data) {
    const props = {}
    const events = []
    const methods = []
    const slots = []
    const typeDetail = {}
    const suggestions = []
    let propsChildren = []
    let eventsChildren = []
    let slotsChildren = []
    let methodsChildren = []
    const result = { name: key, description, description_zh, tag, props, link, link_zh: link, typeDetail, events, methods, slots, filename: key, suggestions }
    if (data[key].props)
      propsChildren = data[key].props
    if (data[key].events)
      eventsChildren = data[key].events
    if (data[key].slot)
      slotsChildren = data[key].slot
    if (data[key].methods)
      methodsChildren = data[key].methods
    console.log({ propsChildren })
    Array.from(propsChildren).forEach((item) => {
      let children = Array.from(item.children)
      let prop = children[0].textContent.split(' ')[0]
      const version_reg = /v[0-9]+\..*/
      if (version_reg.test(prop)) {
        prop = prop.replace(version_reg, '').trim()
      }
      let isRequired = false
      if (prop.includes('*'))
        isRequired = true
      prop = prop.replace('*', '')
      const description = children[1].textContent.replace(/\n/g, '')
      const type = children[2].textContent
      let value = children[3].textContent
      if (prop === 'style')
        prop = ':style'
      else if (
        type === 'number' || type === 'object'
      )
        prop = `:${prop}`

      if (prop === 'model-value (v-model)' || prop === 'model-value' || prop === 'modelValue / v-model')
        prop = 'v-model'
      else
        prop = prop.replace(/([\w-]+) \(v-model\)/, 'v-model:$1')
      if (type === 'boolean' && (value === '' || value === '-'))
        value = 'false'
      else if (type === 'CSSProperties' && !prop.startsWith(':'))
        prop = `:${prop}`

      props[prop] = {
        default: value,
        value: '',
        type,
        description,
        isRequired,
        description_zh: description,
      }
    })

    Array.from(eventsChildren).forEach((item) => {
      const name = item.children[0].textContent.split(' ')[0]
      const description = item.children[1]?.textContent.replace('*', '').replace(/\n/g, '') || ''
      const params = item.children[2]?.textContent.replace(/\n/g, '') || ''
      events.push({ name, description, description_zh: description, params })
    })

    Array.from(slotsChildren).forEach((item) => {
      const name = item.children[0].textContent.split(' ')[0]
      const description = item.children[1].textContent
      slots.push({ name, description, description_zh: description })
    })

    Array.from(methodsChildren).forEach(item => {
      const name = item.children[0].textContent.split(' ')[0]
      const params = item.children[1]?.textContent || ''
      const description = item.children[2]?.textContent.replace('*', '') || ''

      methods.push({
        name,
        description,
        params,
        description_zh: description
      })
    })
    const type = document.querySelector('#types')
    if (type) {
      try {
        console.log(Array.from(type.nextElementSibling.querySelectorAll('pre')), 'detail');
        console.log(Array.from(type.nextElementSibling.querySelectorAll('.tiny-collapse-item__word-overflow')), 'names');
        // const detail = Array.from(type.nextElementSibling.querySelectorAll('pre')).map(i => i.textContent)
        // const names = Array.from(type.nextElementSibling.querySelectorAll('.tiny-collapse-item__word-overflow')).map(i => i.textContent)
        // names.forEach((name, index) => {
        //   typeDetail[name] = detail[index]
        // })
      } catch (error) {

      }
    }
    results.push(result)
  }
  if (results.length === 1)
    copyToClipboard(JSON.stringify(results[0], null, 2))
  else
    copyToClipboard(JSON.stringify(results, null, 2))
  return results
}

function getTypeDetail() {
  const typeDetail = {}
  const table = $0.closest('table')
  const title = table.closest('.i-api-content').previousElementSibling.textContent.split(' ')[0]
  const temp = []
  typeDetail[title] = temp
  table.querySelectorAll('tbody > tr').forEach(item => {
    const name = item.children[0].textContent
    let detail = item.children[1].textContent
    const type = item.children[2].textContent
    const value = item.children[3]?.textContent
    if(value){
      detail = `${detail} 默认值: ${value}`
    }
    temp.push({ name, detail, type })
  })
  copyToClipboard(JSON.stringify(typeDetail, null, 2))
  return typeDetail
}

const cwd = process.cwd()

async function arrayGenerateFile(array) {
  const baseSrc = 'src/ui/viewUi/viewUiV4'
  const fullPath = path.resolve(cwd, baseSrc)
  const importStatements = []
  const exportStatements = []

  // Create directory if it doesn't exist
  try {
    await fsp.mkdir(fullPath, { recursive: true })
    console.log(`Directory created or already exists: ${fullPath}`)
  } catch (error) {
    console.error(`Error creating directory: ${error}`)
    return
  }

  for (const item of array) {
    const url = path.resolve(fullPath, `${item.filename}.json`)
    // 兼容 suggestions
    try {
      const fileContent = JSON.parse(await fsp.readFile(url, 'utf-8'))
      const suggestions = fileContent.suggestions || []
      item.suggestions = suggestions
    } catch (e) {
      // Handle error if needed
    }

    await fsp.writeFile(url, JSON.stringify(item, null, 2), 'utf-8')

    // Generate import and export statements
    importStatements.push(`import ${item.filename} from './${item.filename}.json'`)
    exportStatements.push(item.filename)
  }

  // Generate index.ts content
  const indexContent = `${importStatements.join('\n')}\n\nexport {\n  ${exportStatements.join(',\n  ')}\n}\n`

  // Write index.ts file
  const indexPath = path.resolve(fullPath, 'index.ts')
  await fsp.writeFile(indexPath, indexContent, 'utf-8')
}


arrayGenerateFile(data)
