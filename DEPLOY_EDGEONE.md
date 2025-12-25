# EdgeOne Pages 部署配置指南

本指南将帮助你配置 GitHub Actions 自动化部署到 EdgeOne Pages。

## 前置准备

1. **EdgeOne 账号**：需要一个腾讯云 EdgeOne 账号
2. **EdgeOne Pages 项目**：在 EdgeOne 控制台创建一个 Pages 项目
3. **API 密钥**：获取 EdgeOne API 密钥（Secret ID 和 Secret Key）

## 配置步骤

### 1. 获取 EdgeOne 配置信息

#### 1.1 获取项目 ID

- 登录 EdgeOne 控制台
- 进入 Pages 服务
- 选择你的项目，在项目详情页可以找到项目 ID

#### 1.2 获取 API 密钥

- 登录腾讯云控制台
- 进入「访问管理」>「API 密钥管理」
- 创建或选择现有的 API 密钥（Secret ID 和 Secret Key）

### 2. 配置 GitHub 仓库 secrets

在你的 GitHub 仓库中，进入「Settings」>「Secrets and variables」>「Actions」，添加以下 secrets：

| Secret 名称 | 描述 |
|------------|------|
| `EO_SECRET_ID` | EdgeOne API Secret ID |
| `EO_SECRET_KEY` | EdgeOne API Secret Key |
| `EO_PAGES_PROJECT_ID` | EdgeOne Pages 项目 ID |

### 3. 配置部署环境

部署配置文件位于 `.github/workflows/deploy.yml`，你可以根据需要修改以下参数：

- **分支配置**：默认监听 `main` 分支，可修改 `on.push.branches`
- **部署环境**：`environment` 可设置为 `production`（生产环境）或 `preview`（预览环境）
- **构建产物目录**：`dist_dir` 默认为 `./dist`，确保与你的构建输出目录一致
- **部署备注**：`deploy_desc` 可以自定义部署描述

### 4. 手动触发部署

在 GitHub 仓库的「Actions」页面，找到「Deploy to EdgeOne Pages」工作流，点击「Run workflow」即可手动触发部署。

## 部署流程说明

1. 当代码推送到 `main` 分支或手动触发时，GitHub Actions 会自动运行
2. 安装依赖并构建项目
3. 使用 EdgeOne Pages Action 将构建产物部署到 EdgeOne Pages
4. 部署完成后，你可以在 EdgeOne 控制台查看部署状态

## 常见问题

### Q: 部署失败怎么办？
A: 检查以下几点：
- API 密钥是否正确配置
- 项目 ID 是否正确
- 构建产物目录是否存在且包含正确的文件
- 查看 GitHub Actions 日志获取详细错误信息

### Q: 如何配置预览环境？
A: 将 `environment` 参数设置为 `preview`，并配置对应的环境变量

### Q: 如何自定义部署路径？
A: 可以在 EdgeOne Pages 项目设置中配置自定义域名和路径

## 更多资源

- [EdgeOne Pages 官方文档](https://cloud.tencent.com/document/product/1552)
- [EdgeOne Pages GitHub Action](https://github.com/tencentcloudedge/edgeone-pages-action)
