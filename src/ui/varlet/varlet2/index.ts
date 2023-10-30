import { getLocale } from '@vscode-use/utils'
import { componentsReducer, propsReducer } from '../../utils'
import actionSheet from './actionSheet.json'
import button from './button.json'
import vswitch from './switch.json'
import buttonGroup from './buttonGroup.json'
import checkbox from './checkbox.json'
import checkboxGroup from './checkboxGroup.json'
import form from './form.json'
import pagination from './pagination.json'
import tab from './tab.json'
import tabItem from './tabItem.json'
import tabs from './tabs.json'
import table from './table.json'
import breadcrumbs from './breadcrumbs.json'
import breadcrumb from './breadcrumb.json'
import card from './card.json'
import cell from './cell.json'
import chip from './chip.json'
import col from './col.json'
import row from './row.json'
import collapse from './collapse.json'
import collapseItem from './collapseItem.json'
import countdown from './countdown.json'
import counter from './counter.json'
import datePicker from './datePicker.json'
import dialog from './dialog.json'
import divider from './divider.json'
import drag from './drag.json'
import ellipsis from './ellipsis.json'
import fab from './fab.json'
import formDetails from './formDetails.json'
import imagePreview from './imagePreview.json'
import indexBar from './indexBar.json'
import indexAnchor from './indexAnchor.json'
import input from './input.json'
import link from './link.json'
import list from './list.json'
import loading from './loading.json'
import menu from './menu.json'
import overlay from './overlay.json'
import paper from './paper.json'
import picker from './picker.json'
import popup from './popup.json'
import progress from './progress.json'
import pullRefresh from './pullRefresh.json'
import rate from './rate.json'
import radio from './radio.json'
import radioGroup from './radioGroup.json'
import result from './result.json'
import select from './select.json'
import skeleton from './skeleton.json'
import slider from './slider.json'
import snackbar from './snackbar.json'
import space from './space.json'
import step from './step.json'
import steps from './steps.json'
import sticky from './sticky.json'
import swipe from './swipe.json'
import swipeItem from './swipeItem.json'
import tabsItems from './tabsItems.json'
import timePicker from './timePicker.json'
import tooltip from './tooltip.json'
import uploader from './uploader.json'

export function varlet2() {
  const map: any = [
    actionSheet,
    button,
    vswitch,
    buttonGroup,
    checkbox,
    checkboxGroup,
    form,
    pagination,
    tab,
    tabItem,
    tabs,
    table,
    breadcrumbs,
    breadcrumb,
    card,
    cell,
    chip,
    col,
    row,
    collapse,
    collapseItem,
    countdown,
    counter,
    datePicker,
    divider,
    drag,
    ellipsis,
    fab,
    formDetails,
    imagePreview,
    indexBar,
    indexAnchor,
    input,
    link,
    list,
    loading,
    menu,
    overlay,
    paper,
    picker,
    popup,
    progress,
    pullRefresh,
    rate,
    result,
    select,
    skeleton,
    slider,
    snackbar,
    space,
    step,
    steps,
    sticky,
    swipe,
    swipeItem,
    tabsItems,
    timePicker,
    tooltip,
    uploader,
    dialog,
    radio,
    radioGroup,
  ]

  return propsReducer(map)
}

export function varlet2Components() {
  const isZh = getLocale().includes('zh')

  const map = isZh
    ? [
        ['var-action-sheet', '动作面板', `<var-action-sheet 
  :actions="actions"
  v-model:show="show"
  @select="handleSelect"
/>`],
        ['var-dialog', '对话框', `<var-dialog
    title="兰亭序"
    message="兰亭临帖 行书如行云流水"
    v-model:show="show"
    @confirm="() => Snackbar.success('confirm')"
    @cancel="() => Snackbar.error('cancel')"
    @closed="() => Snackbar.info('closed')"
  />`],
        ['var-radio', '单选框', '<var-radio v-model="value">当前的值: {{ value }}</var-radio>'],
        ['var-radio-group', '单选框组', `<var-radio-group v-model="value">
  <var-radio :checked-value="0">吃饭</var-radio>
  <var-radio :checked-value="1">睡觉</var-radio>
</var-radio-group>`],
        ['var-button', '按钮', '<var-button>默认按钮</var-button>'],
        ['var-switch', '开关', '<var-switch v-model="value" />'],
        ['var-button-group', '按钮组', `<var-button-group type="primary" mode="text">
  <var-button>按钮</var-button>
  <var-button>按钮</var-button>
  <var-button>按钮</var-button>
</var-button-group>`],
        ['var-checkbox', '复选框', '<var-checkbox v-model="value">当前的值: {{ value }}</var-checkbox>'],
        ['var-checkbox-group', '复选框组', `<var-checkbox-group
  v-model="value"
  :rules="[v => v.length === 2 || '请全选']"
>
  <var-checkbox :checked-value="0">吃饭</var-checkbox>
  <var-checkbox :checked-value="1">睡觉</var-checkbox>
</var-checkbox-group>`],
        ['var-form', '表单', `<var-form 
    ref="form" 
    :disabled="disabled"
    :readonly="readonly" 
    scroll-to-error="start"
  ></var-form>`],
        ['var-pagination', '分页', '<var-pagination :current="3" :total="120" />'],
        ['var-tabs', '选项卡组', `<var-tabs
  elevation
  color="var(--color-primary)"
  active-color="#fff"
  inactive-color="hsla(0, 0%, 100%, .6)"
  disabled-color="#aaa"
  v-model:active="active"
>
  <var-tab>选项1</var-tab>
  <var-tab>选项2</var-tab>
  <var-tab disabled>禁用选项</var-tab>
</var-tabs>`],
        ['var-tab', '选项卡', '<var-tab>选项1</var-tab>'],
        ['var-tab-item', '选项卡', '<var-tab-item>选项1</var-tab-item>'],
        ['var-table', '表格', '<var-table>选项1</var-table>'],
        ['var-breadcrumbs', '面包屑', '<var-breadcrumbs></var-breadcrumbs>'],
        ['var-breadcrumb', '面包屑', '<var-breadcrumb></var-breadcrumb>'],
        ['var-card', '卡片', `<var-card
  title="本草纲目"
  description="如果华佗再世,崇洋都被医治,外邦来学汉字,激发我民族意识。马钱子、决明子、苍耳子，还有莲子；黄药子、苦豆子、川楝子，我要面子。用我的方式，改写一部历史。没什么别的事，跟着我念几个字。山药当归枸杞 GO，山药 当归 枸杞 GO，看我抓一把中药，服下一帖骄傲~"
/>`],
        ['var-cell', '单元格', '<var-cell>这是单元格</var-cell>'],
        ['var-chip', '纸片', '<var-chip>默认纸片</var-chip>'],
        ['var-col', '布局 提供 span 属性设置这一列所占的份数，offset 属性设置这一列偏移的份数。', '<var-col :span="8">span: 8</var-col>'],
        ['var-row', '布局 组件把一行平均划分为 24列 栅格( 24份 )', '<var-row></varrow>'],
        ['var-collapse', '折叠面板 可以折叠/展开的内容区域。', '<var-collapse v-model="value" @change="changeHandle"></varrow>'],
        ['var-collapse', '折叠面板 可以折叠/展开的内容区域。', '<var-collapse-item title="标题" name="1">文本</var-collapse-item>'],
        ['var-countdown', '倒计时 用于实时展示倒计时数值，支持毫秒精度。', '<var-countdown :time="time" />'],
        ['var-counter', '计数器', '<var-counter v-model="value"/>'],
        ['var-date-picker', '日期选择器 用于选择日期或日期范围。', '<var-date-picker v-model="date" />'],
        ['var-divider', '分割线 用于分隔列表或布局的各个部分。', '<var-divider />'],
        ['var-drag', '拖拽 使元素可以自由拖拽。', `<var-drag>
  <var-button type="primary">基本使用</var-button>
</var-drag>`],
        ['var-ellipsis', '文本省略 主要用于省略单行文字和多行文字。', `<var-ellipsis style="max-width: 170px">
  其实没有什么事情是不可能的，我都拿到世界冠军了，真的没有什么事情是不可能的。
</var-ellipsis>`],
        ['var-fab', '悬浮动作按钮 悬浮动作按钮组件，按下可显示一组动作按钮。', '<var-fab :type="type" />'],
        ['var-form-details', '表单 提供了对所有表单组件进行控制的能力。', '<var-form-details :error-message="errorMessage" :extra-message="extraMessage" />'],
        ['var-image-preview', '图片预览 图片放大预览，支持双击倍数放大，支持函数调用和组件调用两种方式。', '<var-image-preview :images="images" v-model:show="show" />'],
        ['var-index-bar', '索引栏 用于跳转到页面指定位置。', '<var-index-bar duration="300" @change="change"></var-index-bar>'],
        ['var-index-anchor', '索引栏 用于跳转到页面指定位置。', `<var-index-anchor :index="item" class="anchor">
  标题 {{ item }}
</var-index-anchor>`],
        ['var-input', '输入框 输入框的行为和基本原生一致，用户输入时始终获得一个符合 type 规则的字符串，可选择 standard 和 outlined 两种风格，默认为 standard。', '<var-input placeholder="请输入文本" v-model="value" />'],
        ['var-link', '链接 链接组件，用于页面跳转。', '<var-link>默认链接</var-link>'],
        ['var-list', '无限滚动列表 无限滚动加载列表、触底加载，支持手动检查位置并加载。支持自定义加载状态、错误状态、数据加载完成状态。', `<var-list
  :finished="finished"
  v-model:loading="loading"
  @load="load"
>
  <var-cell :key="item" v-for="item in list">
    列表项: {{ item }}
  </var-cell>
</var-list>`],
        ['var-loading', '加载 加载组件，用于数据加载时执行动画。', '<var-loading type="circle" />'],
        ['var-menu', '菜单 当元素点击时显示一个菜单，通过控制弹出位置和偏移量改变菜单的显示位置。', '<var-menu></var-menu>'],
        ['var-overlay', '遮罩层 创建一个遮罩层，用于强调特定的页面元素。', '<var-overlay v-model:show="show" />'],
        ['var-paper', '纸张 创建一个更容易的使用海拔效果和水波效果的容器', '<var-paper :elevation="2" :width="100" :height="100" ripple />'],
        ['var-picker', '多列选择器 提供了函数和组件两种调用方式。同时支持级联模式，可以处理多级联动。', '<var-picker :columns="columns" />'],
        ['var-popup', '弹出层 创建一个可以从上、下、左、右、中心弹出的容器，用于展示信息。默认使用 teleport 插入到 body 尾部。', '<var-popup v-model:show="center"></var-popup>'],
        ['var-progress', '进度条 展示操作的当前进度。', '<var-progress :value="20" />'],
        ['var-pull-refresh', '下拉刷新 用于提供下拉刷新的交互操作', ' <var-pull-refresh v-model="isRefresh" @refresh="refresh"></var-pull-refresh>'],
        ['var-rate', '评分', '<var-rate v-model="score" :count="8"/>'],
        ['var-result', '结果 用于向用户展示结果。', `<var-result 
  type="success" 
  title="成功"
  description="嗨~ 我是结果页的一段描述~"
>
  <template #footer>
    <var-button type="success">知道了</var-button>
  </template>
</var-result>`],
        ['var-select', '选择框 通过下拉菜单展示并选择内容。', `<var-select placeholder="文本关联值" v-model="value2">
  <var-option label="吃饭" :value="1" />
  <var-option label="睡觉" :value="2" />
</var-select>`],
        ['var-skeleton', '骨架屏 显示一些带过渡效果的占位元素，优化加载过程。', '<var-skeleton :loading="loading">加载的数据</var-skeleton>'],
        ['var-slider', '滑块 用于在给定范围内取值。', '<var-slider v-model="value" />'],
        ['var-snackbar', '消息条 用于向用户显示快速消息。', '<var-snackbar v-model:show="show">这是一个消息条！！</var-snackbar>'],
        ['var-space', '间隔 组件库提供了 <var-space> 布局的组件，使您更有效率的进行 flex 布局。', '<var-space></var-space'],
        ['var-steps', '步骤条 引导用户按照流程完成任务的导航条。', `<var-steps :active="active">
  <var-step>步骤1</var-step>
  <var-step>步骤2</var-step>
  <var-step>步骤3</var-step>
  <var-step>步骤4</var-step>
</var-steps>`],
        ['var-step', '步骤条 引导用户按照流程完成任务的导航条。', '<var-step>步骤1</var-step>'],
        ['var-sticky', '粘性布局 粘性布局默认使用监听容器滚动事件的 scroll 模式，如有需要可以切换成基于 css sticky 的模式来提升性能。', `<var-sticky :offset-top="54">
  <var-button type="primary">基本使用</var-button>
</var-sticky>`],
        ['var-swipe', '轮播', `<var-swipe class="swipe-example">
<var-swipe-item>
  <img class="swipe-example-image" src="https://varlet.gitee.io/varlet-ui/cat.jpg">
</var-swipe-item>
</var-swipe>`],
        ['var-swipe-item', '轮播', `<var-swipe-item>
  <img class="swipe-example-image" src="https://varlet.gitee.io/varlet-ui/cat.jpg">
</var-swipe-item>`],
        ['var-tabs-items', '选项卡组 使用 Tabs、Tab 实现选项卡组的切换。使用 TabsItems、TabItem 实现和选项卡组的视图联动', `<var-tabs-items v-model:active="active">
  <var-tab-item>
    呜啦啦啦火车笛，随着奔腾的马蹄。 小妹妹吹着口琴，夕阳下美了剪影。 我用子弹写日记，介绍完了风景。
    接下来换介绍我自己。 我虽然是个牛仔，在酒吧只点牛奶。 为什么不喝啤酒，因为啤酒伤身体。
  </var-tab-item>
</var-tabs-items`],
        ['var-time-picker', '时间选择器 用于选择时间。', '<var-time-picker v-model="date" />'],
        ['var-tooltip', '提示 当元素点击或悬停时显示一个提示，通过控制弹出位置和偏移量改变提示的显示位置。', `<var-tooltip content="Tooltip">
  <var-button type="primary">基本使用</var-button>
</var-tooltip>`],
        ['var-uploader', '文件上传 提供了文件读取、图片/视频预览能力。 通过监听 after-read 事件获取文件上传服务器。', '<var-uploader v-model="files" @after-read="handleAfterRead"/>'],
      ]
    : [
        ['var-action-sheet', 'Action Panel', `<var-action-sheet
   :actions="actions"
   v-model:show="show"
   @select="handleSelect"
/>`],
        ['var-dialog', 'Dialog', `<var-dialog
     title="Lanting Preface"
     message="Lanting's calligraphy is like flowing clouds and flowing water"
     v-model:show="show"
     @confirm="() => Snackbar.success('confirm')"
     @cancel="() => Snackbar.error('cancel')"
     @closed="() => Snackbar.info('closed')"
   />`],
        ['var-radio', 'Radio button', '<var-radio v-model="value">Current value: {{ value }}</var-radio>'],
        ['var-radio-group', 'Radio button group', `<var-radio-group v-model="value">
   <var-radio :checked-value="0">Eat</var-radio>
   <var-radio :checked-value="1">Sleep</var-radio>
</var-radio-group>`],
        ['var-button', 'Button', '<var-button>Default button</var-button>'],
        ['var-switch', 'switch', '<var-switch v-model="value" />'],
        ['var-button-group', 'Button group', `<var-button-group type="primary" mode="text">
   <var-button>Button</var-button>
   <var-button>Button</var-button>
   <var-button>Button</var-button>
</var-button-group>`],
        ['var-checkbox', 'checkbox', '<var-checkbox v-model="value">Current value: {{ value }}</var-checkbox>'],
        ['var-checkbox-group', 'checkbox group', `<var-checkbox-group
   v-model="value"
   :rules="[v => v.length === 2 || 'Please select all']"
>
   <var-checkbox :checked-value="0">Eat</var-checkbox>
   <var-checkbox :checked-value="1">Sleep</var-checkbox>
</var-checkbox-group>`],
        ['var-form', 'form', `<var-form
     ref="form"
     :disabled="disabled"
     :readonly="readonly"
     scroll-to-error="start"
   ></var-form>`],
        ['var-pagination', 'pagination', '<var-pagination :current="3" :total="120" />'],
        ['var-tabs', 'tab group', `<var-tabs
   elevation
   color="var(--color-primary)"
   active-color="#fff"
   inactive-color="hsla(0, 0%, 100%, .6)"
   disabled-color="#aaa"
   v-model:active="active"
>
   <var-tab>Option 1</var-tab>
   <var-tab>Option 2</var-tab>
   <var-tab disabled>Disabled option</var-tab>
</var-tabs>`],
        ['var-tab', 'tab', '<var-tab>Option 1</var-tab>'],
        ['var-tab-item', 'tab', '<var-tab-item>Option 1</var-tab-item>'],
        ['var-table', 'table', '<var-table>Option 1</var-table>'],
        ['var-breadcrumbs', 'breadcrumbs', '<var-breadcrumbs></var-breadcrumbs>'],
        ['var-breadcrumb', 'breadcrumb', '<var-breadcrumb></var-breadcrumb>'],
        ['var-card', 'card', `<var-card
   title="Compendium of Materia Medica"
   description="If Hua Tuo is reincarnated, all worship of foreigners will be cured, and foreigners will come to learn Chinese characters and stimulate our national consciousness. Nux vomica, cassia seed, Xanthium seed, and lotus seeds; yellow Yaozi, bitter bean seeds, and Sophora indica, I want face. Rewrite a piece of history in my own way. Nothing else, just read a few words after me. Yam, Angelica and Wolfberry GO, Yam, Angelica and Wolfberry GO, watch me grab a handful of Chinese medicine and take it and be proud~"
/>`],
        ['var-cell', 'cell', '<var-cell>This is the cell</var-cell>'],
        ['var-chip', 'paper', '<var-chip>default paper</var-chip>'],
        ['var-col', 'Layout provides the span attribute to set the number of shares occupied by this column, and the offset attribute sets the number of shares offset by this column. ', '<var-col :span="8">span: 8</var-col>'],
        ['var-row', 'The layout component divides a row evenly into a 24-column grid (24 copies)', '<var-row></varrow>'],
        ['var-collapse', 'Collapse panel A content area that can be collapsed/expanded. ', '<var-collapse v-model="value" @change="changeHandle"></varrow>'],
        ['var-collapse', 'Collapse panel A content area that can be collapsed/expanded. ', '<var-collapse-item title="title" name="1">Text</var-collapse-item>'],
        ['var-countdown', 'Countdown is used to display the countdown value in real time, supporting millisecond precision. ', '<var-countdown :time="time" />'],
        ['var-counter', 'Counter', '<var-counter v-model="value"/>'],
        ['var-date-picker', 'Date picker is used to select a date or date range. ', '<var-date-picker v-model="date" />'],
        ['var-divider', 'Divider lines are used to separate parts of a list or layout. ', '<var-divider />'],
        ['var-drag', 'Drag allows elements to be dragged freely. ', `<var-drag>
   <var-button type="primary">Basic use</var-button>
</var-drag>`],
        ['var-ellipsis', 'Text omission is mainly used to omit single-line text and multi-line text. ', `<var-ellipsis style="max-width: 170px">
   In fact, nothing is impossible. I have won the world championship, so nothing is impossible.
</var-ellipsis>`],
        ['var-fab', 'Floating action button Floating action button component, press to display a set of action buttons. ', '<var-fab :type="type" />'],
        ['var-form-details', 'Form provides the ability to control all form components. ', '<var-form-details :error-message="errorMessage" :extra-message="extraMessage" />'],
        ['var-image-preview', 'Image preview: Image enlargement preview, supports double-click magnification, supports function calling and component calling. ', '<var-image-preview :images="images" v-model:show="show" />'],
        ['var-index-bar', 'The index bar is used to jump to the specified location on the page. ', '<var-index-bar duration="300" @change="change"></var-index-bar>'],
        ['var-index-anchor', 'The index column is used to jump to the specified position on the page. ', `<var-index-anchor :index="item" class="anchor">
   Title {{ item }}
</var-index-anchor>`],
        ['var-input', 'Input box The behavior of the input box is basically the same as the native one. When the user inputs, he always gets a string that conforms to the type rules. There are two styles: standard and outlined. The default is standard. ', '<var-input placeholder="Please enter text" v-model="value" />'],
        ['var-link', 'Link link component, used for page jumps. ', '<var-link>Default link</var-link>'],
        ['var-list', 'Infinite scrolling list infinite scrolling loading list, bottom loading, supports manual position checking and loading. Supports custom loading status, error status, and data loading completion status. ', `<var-list
   :finished="finished"
   v-model:loading="loading"
   @load="load"
>
   <var-cell :key="item" v-for="item in list">
     List items: {{ item }}
   </var-cell>
</var-list>`],
        ['var-loading', 'Loading loading component, used to perform animation when data is loaded. ', '<var-loading type="circle" />'],
        ['var-menu', 'Menu Displays a menu when the element is clicked, and changes the display position of the menu by controlling the pop-up position and offset. ', '<var-menu></var-menu>'],
        ['var-overlay', 'Overlay Create an overlay to emphasize specific page elements. ', '<var-overlay v-model:show="show" />'],
        ['var-paper', 'Paper creates a container that makes it easier to use elevation and ripple effects', '<var-paper :elevation="2" :width="100" :height="100" ripple /> '],
        ['var-picker', 'Multi-column picker provides two calling methods: function and component. It also supports cascade mode and can handle multi-level linkage. ', '<var-picker :columns="columns" />'],
        ['var-popup', 'Popup layer creates a container that can pop up from top, bottom, left, right, and center to display information. By default, teleport is used to insert at the end of the body. ', '<var-popup v-model:show="center"></var-popup>'],
        ['var-progress', 'Progress bar displays the current progress of the operation. ', '<var-progress :value="20" />'],
        ['var-pull-refresh', 'Pull-refresh is used to provide interactive operations of pull-down refresh', ' <var-pull-refresh v-model="isRefresh" @refresh="refresh"></var-pull-refresh >'],
        ['var-rate', 'score', '<var-rate v-model="score" :count="8"/>'],
        ['var-result', 'Result is used to display the results to the user. ', `<var-result
   type="success"
   title="success"
   description="Hi~ I am a description of the results page~"
>
   <template #footer>
     <var-button type="success">Got it</var-button>
   </template>
</var-result>`],
        ['var-select', 'Select box displays and selects content through drop-down menu. ', `<var-select placeholder="Text associated value" v-model="value2">
   <var-option label="Eat" :value="1" />
   <var-option label="Sleep" :value="2" />
</var-select>`],
        ['var-skeleton', 'Skeleton screen displays some placeholder elements with transition effects to optimize the loading process. ', '<var-skeleton :loading="loading">Loading data</var-skeleton>'],
        ['var-slider', 'Slider is used to take a value within a given range. ', '<var-slider v-model="value" />'],
        ['var-snackbar', 'Message bar is used to display quick messages to the user. ', '<var-snackbar v-model:show="show">This is a message bar! ! </var-snackbar>'],
        ['var-space', 'Spacer The component library provides <var-space> layout components, allowing you to perform flex layout more efficiently. ', '<var-space></var-space'],
        ['var-steps', 'Step bar is a navigation bar that guides users to complete tasks according to the process. ', `<var-steps :active="active">
   <var-step>Step 1</var-step>
   <var-step>Step 2</var-step>
   <var-step>Step 3</var-step>
   <var-step>Step 4</var-step>
</var-steps>`],
        ['var-step', 'Step bar is a navigation bar that guides users to complete tasks according to the process. ', '<var-step>Step 1</var-step>'],
        ['var-sticky', 'Sticky layout Sticky layout uses the scroll mode that listens to container scroll events by default. If necessary, you can switch to a css sticky-based mode to improve performance. ', `<var-sticky :offset-top="54">
   <var-button type="primary">Basic use</var-button>
</var-sticky>`],
        ['var-swipe', 'carousel', `<var-swipe class="swipe-example">
<var-swipe-item>
   <img class="swipe-example-image" src="https://varlet.gitee.io/varlet-ui/cat.jpg">
</var-swipe-item>
</var-swipe>`],
        ['var-swipe-item', 'carousel', `<var-swipe-item>
   <img class="swipe-example-image" src="https://varlet.gitee.io/varlet-ui/cat.jpg">
</var-swipe-item>`],
        ['var-tabs-items', 'Tab group uses Tabs and Tab to switch tab groups. Use TabsItems and TabItem to implement view linkage with the tab group', `<var-tabs-items v-model:active="active">
   <var-tab-item>
     The train whistle whistles, along with the galloping horse hooves. The little sister plays the harmonica, and her silhouette is beautiful under the sunset. I wrote a bullet journal and finished introducing the scenery.
     Next, let me introduce myself. Even though I'm a cowboy, I only order milk at the bar. Why not drink beer, because beer is harmful to the body.
   </var-tab-item>
</var-tabs-items`],
        ['var-time-picker', 'Time picker is used to select time. ', '<var-time-picker v-model="date" />'],
        ['var-tooltip', 'Tip displays a tip when the element is clicked or hovered, and changes the display position of the tip by controlling the pop-up position and offset. ', `<var-tooltip content="Tooltip">
   <var-button type="primary">Basic use</var-button>
</var-tooltip>`],
        ['var-uploader', 'File upload provides file reading and image/video preview capabilities. Obtain the file upload server by listening to the after-read event. ', '<var-uploader v-model="files" @after-read="handleAfterRead"/>'],
      ]
  return componentsReducer(map)
}
