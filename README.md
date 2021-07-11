# transform-import

一个在打包阶段把 import 函数转换为 import 命令的 vite 插件

该插件会把当前文件所有通过import函数方式引入改为通过import命令方式引入。
## 转换前
>
// 路径请以@开头 以.vue文件结尾
// 别名@可在vite.config.js文件中配置

```js

const index = () => import("@/pages/index.vue")
const tab = () => import("@/pages/tab.vue")
```

### 转换后

```js

import index from "@/pages/index.vue"
import tab from "@/pages/tab.vue"

```

# 安装

npm install vite-plugin-vue-transform-import --save-dev

# 使用

```js
// vite.config.js
import transformImport from 'vite-plugin-vue-transform-import'
export default defineConfig({
    alias: { '@': path.resolve(__dirname, 'src') },
    plugins: [
        // 传入需要转换文件的相对路径路径
        transformImport('/router/index.js'),
    },
    
})
```
