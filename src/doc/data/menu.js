/**
 * @author: pkeros.
 * @date: 2016/6/21.
 * @mail: pkeros@vip.qq.com
 * @see: https://www.github.com/pkeros/
 */

export default [
  {
    name: '开发指南 Guide',
    subMenu: [
      {name: '安装', icon: 'icon', link: 'install'},
      {name: '快速上手', icon: 'icon', link: ''}
    ]
  },
  {
    name: '基础组件 Base',
    subMenu: [
      {
        name: '基础 Base', icon: 'icon', link: '',
        subMenu: [
          {name: 'Layout 布局', icon: 'icon', link: 'layout'},
          {name: 'Button 按钮', icon: 'icon', link: 'button'}
        ]
      }
    ]
  },
   {
    name: '验证 Validate',
    subMenu: [
      {
        name: '验证', icon: 'icon', link: '',
        subMenu:[
          {name:'默认校验规则',icon:'icon',link:'defaultValidateRules'},
          {name:'默认提示',icon:'icon',link:'defaultPrompt'},
          {name:'使用方式',icon:'icon',link:'usageMode'},
          {name:'demo 示例',icon:'icon',link:'demo'},
          {name:'validate API',icon:'icon',link:'api'},
        ]
      }
    ]
  },
  {
    name: '日志 Log',
    subMenu: [
      {name: '更新日志', icon: 'icon', link: ''}
    ]
  },
]
