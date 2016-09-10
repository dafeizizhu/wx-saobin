### 初始化

    $ npm install -g http-server
    $ npm install -g webpack
    $ npm install

### 调试

    $ http-server -p 8080 &
    $ NODE_ENV=dev webpack -d --watch &
    $ open http://localhost:8080

### 构建到正式环境

    // TODO

### 路由

1. `#/` => 我有车
2. `#/travel` => 我有车
3. `#/travel/submit` => 我有车单击发布的结果
4. `#/request` => 我要蹭
5. `#/request/rs` => 我要蹭单击搜索的结果
7. `#/user-center` => 用户中心首页
8. `#/user-center/personal-info` => 用户中心个人信息
9. `#/user-center/my-travels` => 用户中心我的行程
10. `#/user-center/my-travels/request` => 用户中心我的行程单击蹭车请求
11. `#/user-center/my-travels/response` => 用户中心我的行程单击邀请回应
12. `#/user-center/my-requests` => 用户中心蹭车信息
13. `#/user-center/my-requests/request` => 用户中心蹭车信息单击行程邀请
14. `#/user-center/my-requests/response` => 用户中心蹭车信息单击蹭车回应
15. `#/user-center/my-rate` => 用户中心我的评价
16. `#/sign-up` => 新用户注册
