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
2. `#/own-a-car` => 我有车
3. `#/own-a-car/rs` => 我有车单击发布的结果
4. `#/need-a-car` => 我要蹭
5. `#/need-a-car/rs` => 我要蹭单击搜索的结果
7. `#/user-center` => 用户中心首页
8. `#/user-center/personal-info` => 用户中心个人信息
9. `#/user-center/my-itinerary` => 用户中心我的行程
10. `#/user-center/my-itinerary/request` => 用户中心我的行程单击蹭车请求
11. `#/user-center/my-itinerary/response` => 用户中心我的行程单击邀请回应
12. `#/user-center/need-cars` => 用户中心蹭车信息
13. `#/user-center/need-cars/request` => 用户中心蹭车信息单击行程邀请
14. `#/user-center/need-cars/response` => 用户中心蹭车信息单击蹭车回应
15. `#/user-center/my-rate` => 用户中心我的评价
16. `#/sign-up` => 新用户注册
