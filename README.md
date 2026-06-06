# liangshi-calc

## 为角色面板功能提供全方位拓展
使用说明（需要安装Miao-Plugin才能使用）

打开Yunzai-Bot 根目录输入

<details><summary>跑路了</summary>

跑路了，有空就更新，没空就没空

![](./resources/LLQ.jpg)

</details>

##### gitee
~~~~~~~~~~
git clone --depth=1 https://gitee.com/liangshi233/liangshi-calc.git ./plugins/liangshi-calc/
~~~~~~~~~~
##### github
~~~~~~~~~~
git clone --depth=1 https://github.com/liangshi233/liangshi-calc.git ./plugins/liangshi-calc/
~~~~~~~~~~
   > 如果你的网络环境较差，无法连接到 Github，推荐使用文件代理加速下载服务
   >
   > ```
   > git clone --depth=1 https://git.090708.xyz/https://github.com/liangshi233/liangshi-calc.git ./plugins/liangshi-calc/
   > ```

重启Bot后即可启用插件

### 设置
设置请在本插件目录下`config/config.yaml` 修改
>若设置出现问题可删除`config/config.yaml`，重启后会重新生成

###### 计算/评分基础设置
~~~~~~~~~~YAML
artisLiang: false #liangshicalc普通评分
artisLiangZ: false #liangshicalc自适应评分
~~~~~~~~~~
###### 其他设置
~~~~~~~~~~YAML
autoRefresh: true #重启后会自动刷新极限、平民等预设面板，默认开启，不需要则改为 false
panelmodel: 1 #自动刷新预设面板的版本，默认使用liangshi，需要自定义请修改为 0
~~~~~~~~~~

！独立角色排行设置移至`liangshi-calc\config\ranking.js`,设置内容与原先保持一致

更多设置内容请 [点击](config/system/config.md)🤔

### 功能
~~~~~~~~~~
梁氏Max：合并基础、超全、前瞻、队伍、智能组队等来源后的唯一伤害计算规则
现有的角色提供预设面板以供查看
支持自定义排行目标条目
支持自定义条目显示名称
支持梁氏评分与自适应评分
~~~~~~~~~~
！梁氏Max来源包括本地梁氏旧规则、上游 master/team、lolomi-calc、Miao-Panel 共创服计算、Miao-Panel fork 以及 miao-plugin 原始计算
！Miao-Panel 共创服角色按角色名合并，不按 id 合并；银狼、银狼Pro、银狼LV.999 保持为三套独立规则
！通用计算和面板数据仍需要安装 miao-plugin 才可正常使用

默认支持内容查询 [点击](damage/liangshi-gs/README.md)🤔

---

> 其他资源位置

|名称|gitee|github|
|:----:|:----:|:----:|
|Yunzai-Bot | [gitee](https://gitee.com/le-niao/Yunzai-Bot) | [github](https://github.com/le-niao/Yunzai-Bot) |
|Yunzai-Miao| [gitee](https://gitee.com/yoimiya-kokomi/Yunzai-Bot) | [github](https://github.com/yoimiya-kokomi/Yunzai-Bot) |
|Miao-Yunzai | [gitee](https://gitee.com/yoimiya-kokomi/Miao-Yunzai) | [github](https://github.com/yoimiya-kokomi/Miao-Yunzai) |
|Miao-Plugin | [gitee](https://gitee.com/yoimiya-kokomi/miao-plugin) | [github](https://github.com/yoimiya-kokomi/miao-plugin) |
