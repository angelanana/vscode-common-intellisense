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
  Scroll,
]

export function viewUiV4() {
  return propsReducer('view-ui4', map, '')
}

const componentsMap = [
  [Button, Button.name, `<${Button.name}></${Button.name}>`],
  [ButtonGroup, ButtonGroup.name, `<${ButtonGroup.name}></${ButtonGroup.name}>`],
  [Icon, Icon.name, `<${Icon.name}></${Icon.name}>`],
  [Row, Row.name, `<${Row.name}></${Row.name}>`],
  [Col, Col.name, `<${Col.name}></${Col.name}>`],
  [Sider, Sider.name, `<${Sider.name}></${Sider.name}>`],
  [List, List.name, `<${List.name}></${List.name}>`],
  [ListItem, ListItem.name, `<${ListItem.name}></${ListItem.name}>`],
  [ListItemMeta, ListItemMeta.name, `<${ListItemMeta.name}></${ListItemMeta.name}>`],
  [Card, Card.name, `<${Card.name}></${Card.name}>`],
  [Collapse, Collapse.name, `<${Collapse.name}></${Collapse.name}>`],
  [Panel, Panel.name, `<${Panel.name}></${Panel.name}>`],
  [Split, Split.name, `<${Split.name}></${Split.name}>`],
  [Divider, Divider.name, `<${Divider.name}></${Divider.name}>`],
  [CellGroup, CellGroup.name, `<${CellGroup.name}></${CellGroup.name}>`],
  [Cell, Cell.name, `<${Cell.name}></${Cell.name}>`],
  [Menu, Menu.name, `<${Menu.name}></${Menu.name}>`],
  [MenuItem, MenuItem.name, `<${MenuItem.name}></${MenuItem.name}>`],
  [Submenu, Submenu.name, `<${Submenu.name}></${Submenu.name}>`],
  [MenuGroup, MenuGroup.name, `<${MenuGroup.name}></${MenuGroup.name}>`],
  [Tabs, Tabs.name, `<${Tabs.name}></${Tabs.name}>`],
  [TabPane, TabPane.name, `<${TabPane.name}></${TabPane.name}>`],
  [Dropdown, Dropdown.name, `<${Dropdown.name}></${Dropdown.name}>`],
  [DropdownItem, DropdownItem.name, `<${DropdownItem.name}></${DropdownItem.name}>`],
  [Page, Page.name, `<${Page.name}></${Page.name}>`],
  [Breadcrumb, Breadcrumb.name, `<${Breadcrumb.name}></${Breadcrumb.name}>`],
  [BreadcrumbItem, BreadcrumbItem.name, `<${BreadcrumbItem.name}></${BreadcrumbItem.name}>`],
  [Badge, Badge.name, `<${Badge.name}></${Badge.name}>`],
  [Anchor, Anchor.name, `<${Anchor.name}></${Anchor.name}>`],
  [AnchorLink, AnchorLink.name, `<${AnchorLink.name}></${AnchorLink.name}>`],
  [Steps, Steps.name, `<${Steps.name}></${Steps.name}>`],
  [Step, Step.name, `<${Step.name}></${Step.name}>`],
  [Form, Form.name, `<${Form.name}></${Form.name}>`],
  [FormItem, FormItem.name, `<${FormItem.name}></${FormItem.name}>`],
  [Input, Input.name, `<${Input.name}></${Input.name}>`],
  [Radio, Radio.name, `<${Radio.name}></${Radio.name}>`],
  [RadioGroup, RadioGroup.name, `<${RadioGroup.name}></${RadioGroup.name}>`],
  [Checkbox, Checkbox.name, `<${Checkbox.name}></${Checkbox.name}>`],
  [CheckboxGroup, CheckboxGroup.name, `<${CheckboxGroup.name}></${CheckboxGroup.name}>`],
  [Switch, Switch.name, `<${Switch.name}></${Switch.name}>`],
  [Table, Table.name, `<${Table.name}></${Table.name}>`],
  [Select, Select.name, `<${Select.name}></${Select.name}>`],
  [Option, Option.name, `<${Option.name}></${Option.name}>`],
  [OptionGroup, OptionGroup.name, `<${OptionGroup.name}></${OptionGroup.name}>`],
  [AutoComplete, AutoComplete.name, `<${AutoComplete.name}></${AutoComplete.name}>`],
  [Slider, Slider.name, `<${Slider.name}></${Slider.name}>`],
  [DatePicker, DatePicker.name, `<${DatePicker.name}></${DatePicker.name}>`],
  [TimePicker, TimePicker.name, `<${TimePicker.name}></${TimePicker.name}>`],
  [Cascader, Cascader.name, `<${Cascader.name}></${Cascader.name}>`],
  [Transfer, Transfer.name, `<${Transfer.name}></${Transfer.name}>`],
  [InputNumber, InputNumber.name, `<${InputNumber.name}></${InputNumber.name}>`],
  [Rate, Rate.name, `<${Rate.name}></${Rate.name}>`],
  [Upload, Upload.name, `<${Upload.name}></${Upload.name}>`],
  [ColorPicker, ColorPicker.name, `<${ColorPicker.name}></${ColorPicker.name}>`],
  [Alert, Alert.name, `<${Alert.name}></${Alert.name}>`],
  [Modal, Modal.name, `<${Modal.name}></${Modal.name}>`],
  [Drawer, Drawer.name, `<${Drawer.name}></${Drawer.name}>`],
  [Tree, Tree.name, `<${Tree.name}></${Tree.name}>`],
  [Tooltip, Tooltip.name, `<${Tooltip.name}></${Tooltip.name}>`],
  [Poptip, Poptip.name, `<${Poptip.name}></${Poptip.name}>`],
  [Progress, Progress.name, `<${Progress.name}></${Progress.name}>`],
  [Avatar, Avatar.name, `<${Avatar.name}></${Avatar.name}>`],
  [Tag, Tag.name, `<${Tag.name}></${Tag.name}>`],
  [Carousel, Carousel.name, `<${Carousel.name}></${Carousel.name}>`],
  [Timeline, Timeline.name, `<${Timeline.name}></${Timeline.name}>`],
  [TimelineItem, TimelineItem.name, `<${TimelineItem.name}></${TimelineItem.name}>`],
  [Time, Time.name, `<${Time.name}></${Time.name}>`],
  [Circle, Circle.name, `<${Circle.name}></${Circle.name}>`],
  [Affix, Affix.name, `<${Affix.name}></${Affix.name}>`],
  [BackTop, BackTop.name, `<${BackTop.name}></${BackTop.name}>`],
  [Spin, Spin.name, `<${Spin.name}></${Spin.name}>`],
  [Scroll, Scroll.name, `<${Scroll.name}></${Scroll.name}>`],
]

export function viewUiV4Components() {
  return componentsReducer({
    map: componentsMap,
    isSeperatorByHyphen: false,
    prefix: '',
    isReact: false,
    lib: 'view-ui',
  })
}
