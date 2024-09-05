import { componentsReducer, propsReducer } from '../../utils'
import Button from './Button.json'
import ButtonGroup from './ButtonGroup.json'
import Icon from './Icon.json'
import Row from './Row.json'
import Col from './Col.json'
import Sider from './Sider.json'
import List from './List.json'
import ListItem from './ListItem.json'
import ListItemMeta from './ListItemMeta.json'
import Card from './Card.json'
import Collapse from './Collapse.json'
import Panel from './Panel.json'
import Split from './Split.json'
import Divider from './Divider.json'
import CellGroup from './CellGroup.json'
import Cell from './Cell.json'
import Menu from './Menu.json'
import MenuItem from './MenuItem.json'
import Submenu from './Submenu.json'
import MenuGroup from './MenuGroup.json'
import Tabs from './Tabs.json'
import TabPane from './TabPane.json'
import Dropdown from './Dropdown.json'
import DropdownItem from './DropdownItem.json'
import Page from './Page.json'
import Breadcrumb from './Breadcrumb.json'
import BreadcrumbItem from './BreadcrumbItem.json'
import Badge from './Badge.json'
import Anchor from './Anchor.json'
import AnchorLink from './AnchorLink.json'
import Steps from './Steps.json'
import Step from './Step.json'
import Form from './Form.json'
import FormItem from './FormItem.json'
import Input from './Input.json'
import Radio from './Radio.json'
import RadioGroup from './RadioGroup.json'
import Checkbox from './Checkbox.json'
import CheckboxGroup from './CheckboxGroup.json'
import Switch from './Switch.json'
import Table from './Table.json'
import Select from './Select.json'
import Option from './Option.json'
import OptionGroup from './OptionGroup.json'
import AutoComplete from './AutoComplete.json'
import Slider from './Slider.json'
import DatePicker from './DatePicker.json'
import TimePicker from './TimePicker.json'
import Cascader from './Cascader.json'
import Transfer from './Transfer.json'
import InputNumber from './InputNumber.json'
import Rate from './Rate.json'
import Upload from './Upload.json'
import ColorPicker from './ColorPicker.json'
import Alert from './Alert.json'
import Modal from './Modal.json'
import Drawer from './Drawer.json'
import Tree from './Tree.json'
import Tooltip from './Tooltip.json'
import Poptip from './Poptip.json'
import Progress from './Progress.json'
import Avatar from './Avatar.json'
import Tag from './Tag.json'
import Carousel from './Carousel.json'
import Timeline from './Timeline.json'
import TimelineItem from './TimelineItem.json'
import Time from './Time.json'
import Circle from './Circle.json'
import Affix from './Affix.json'
import BackTop from './BackTop.json'
import Spin from './Spin.json'
import Scroll from './Scroll.json'

const map: any = [
  Button,
  ButtonGroup,
  Icon,
  Row,
  Col,
  Sider,
  List,
  ListItem,
  ListItemMeta,
  Card,
  Collapse,
  Panel,
  Split,
  Divider,
  CellGroup,
  Cell,
  Menu,
  MenuItem,
  Submenu,
  MenuGroup,
  Tabs,
  TabPane,
  Dropdown,
  DropdownItem,
  Page,
  Breadcrumb,
  BreadcrumbItem,
  Badge,
  Anchor,
  AnchorLink,
  Steps,
  Step,
  Form,
  FormItem,
  Input,
  Radio,
  RadioGroup,
  Checkbox,
  CheckboxGroup,
  Switch,
  Table,
  Select,
  Option,
  OptionGroup,
  AutoComplete,
  Slider,
  DatePicker,
  TimePicker,
  Cascader,
  Transfer,
  InputNumber,
  Rate,
  Upload,
  ColorPicker,
  Alert,
  Modal,
  Drawer,
  Tree,
  Tooltip,
  Poptip,
  Progress,
  Avatar,
  Tag,
  Carousel,
  Timeline,
  TimelineItem,
  Time,
  Circle,
  Affix,
  BackTop,
  Spin,
  Scroll
]

export function viewUiV4() {
  return propsReducer('view-ui-v4', map, '')
}

function generateComponentsMap(components: any[]): [any, string, string][] {
  return components.map(component => {
    const name = component.name;
    return [component, name, `<${name}></${name}>`];
  });
}

const componentsMap = generateComponentsMap(map);

export function viewUiV4Components() {
  return componentsReducer({
    map: componentsMap,
    isSeperatorByHyphen: false,
    prefix: '',
    isReact: false,
    lib: 'view-ui-v4'
  })
}