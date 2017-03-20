/**
 * @description application router file.
 * @author pkeros
 * @data 16/6/1
 * @email pkeros@vip.qq.com
 */

export default (router) => {

  // 路由映射
  router.map({

    /* 主页 */
    '/': {
      name: 'index',
      cnName: '主页',
      component: resolve => {
        require(['./views/index.vue'], res => {
          resolve(res)
        })
      },

      subRoutes: {

        /* 欢迎页面 */
        '/': {
          name: 'welcome',
          cnName: '欢迎页面',
          component: (resolve) => {
            require(['./views/other/welcome.vue'], resolve)
          }
        },

        /* 开发指南-安装 */
        '/install': {
          name: 'install',
          cnName: '简介',
          component: (resolve) => {
            require(['./views/guide/install.md'], resolve)
          }
        },

        
        /* form */
        '/form': {
          name: 'form',
          cnName: '表单',
          component: (resolve) => {
            require(['./views/form/index.vue'], resolve)
          },

          subRoutes: {

            /* 基础组件-布局 */
            '/datepicker': {
              name: 'datepicker',
              cnName: '布局',
              component: (resolve) => {
                require(['./views/form/date-picker.md'], resolve)
              }
            }
          }
        },
        /* data */
        '/data': {
          name: 'data',
          cnName: '数据展示',
          component: (resolve) => {
            require(['./views/data/index.vue'], resolve)
          },

          subRoutes: {

            /* 基础组件-布局 */
            '/page': {
              name: 'page',
              cnName: '分页',
              component: (resolve) => {
                require(['./views/data/page.md'], resolve)
              }
            }
          }
        },


        /* 验证 validate */
        '/validate': {
          name: 'validate',
          cnName: '验证',
          component: (resolve) => {
            require(['./views/validate/index.vue'], resolve)
          },

          subRoutes: {

            /* 默认校验规则 */
            '/defaultValidateRules': {
              name: 'defaultValidateRules',
              cnName: '默认校验规则',
              component: (resolve) => {
                require(['./views/validate/defaultValidateRules.md'], resolve)
              }
            },

             /* 默认提示 */
            '/defaultPrompt': {
              name: 'defaultPrompt',
              cnName: '默认提示',
              component: (resolve) => {
                require(['./views/validate/defaultPrompt.md'], resolve)
              }
            },

            /* 使用方式 */
            '/usageMode': {
              name: 'usageMode',
              cnName: '使用方式',
              component: (resolve) => {
                require(['./views/validate/usageMode.md'], resolve)
              }
            },

            /* demo 示例 */
            '/demo': {
              name: 'demo',
              cnName: 'demo',
              component: (resolve) => {
                require(['./views/validate/demo.md'], resolve)
              }
            },

            /* 使用方式 */
            '/api': {
              name: 'api',
              cnName: 'api',
              component: (resolve) => {
                require(['./views/validate/validate_api.md'], resolve)
              }
            },
          }
        },
        
         /* ValidatorPlus */
        '/validator': {
          name: 'validator',
          cnName: 'ValidatorPlus',
          component: (resolve) => {
            require(['./views/validator/index.vue'], resolve)
          },

          subRoutes: {
            /* 了解规则*/
            '/briefIntroduction': {
              name: 'briefIntroduction',
              cnName: '简介',
              component: (resolve) => {
                require(['./views/validator/briefIntroduction.md'], resolve)
              }
            },
             /* 了解规则*/
            '/understandingRules': {
              name: 'understandingRules',
              cnName: '了解规则',
              component: (resolve) => {
                require(['./views/validator/understandingRules.md'], resolve)
              }
            },
            /* DOM 绑定*/
            '/domBindings': {
              name: 'domBindings',
              cnName: 'DOM 绑定',
              component: (resolve) => {
                require(['./views/validator/domBindings.md'], resolve)
              }
            },
            /* 方法 & 事件*/
            '/methodAndEvent': {
              name: 'methodAndEvent',
              cnName: '方法 & 事件',
              component: (resolve) => {
                require(['./views/validator/methodAndEvent.md'], resolve)
              }
            },

            /* 示例*/
            '/validatorDemo': {
              name: 'validatorDemo',
              cnName: 'demo 示例',
              component: (resolve) => {
                require(['./views/validator/validatorDemo.md'], resolve)
              }
            },

          },
        },

      }
    }
  })
}
