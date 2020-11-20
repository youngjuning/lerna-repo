[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org/)

## 组件发布脚本

### 发布 rc 版

> 发布主版本前的预览版

```sh
$ yarn release:pre # bump 预备补丁版本，eg. 0.1.1-rc.0 -> 0.1.1-rc.1 or 0.1.0 -> 0.1.1-rc.0
$ yarn release:prepatch # 发布预备补丁版本，eg. 0.1.0 -> 0.1.1-rc.0
$ yarn release:preminor # 发布预备次要版本，eg. 0.1.0 -> 0.2.0-rc.0
$ yarn release:premajor # 发布预备主要版本，eg. 0.1.0 -> 1.0.0-rc.0
```

### 发布正式版

```shell
$ yarn release # 根据 conventional commits 自动 bump version
$ yarn release:patch # 发布补丁版本，eg. 0.0.1 -> 0.0.2
$ yarn release:minor # 布次要版本，eg. 0.0.1 -> 0.1.0
$ yarn release:major # 发布主要版本，eg. 0.0.1 -> 1.0.0
```

### 发布 next 版

> 并行的下一个大版本分支

```sh
$ yarn release:next # bump 预备补丁版本，eg. 0.1.1-next.0 -> 0.1.1-next.1 or 0.1.0 -> 0.1.1-next.0
$ yarn release:nextpatch # 发布预备补丁版本，eg. 0.1.0 -> 0.1.1-next.0
$ yarn release:nextminor # 发布预备次要版本，eg. 0.1.0 -> 0.2.0-next.0
$ yarn release:nextmajor # 发布预备主要版本，eg. 0.1.0 -> 1.0.0-next.0
```
