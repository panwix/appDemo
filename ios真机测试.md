#ios真机测试步骤
1. xcode->prefences
2. accounts中点击‘＋’添加apple ID
3. 免费测试中出现的账号信息，双击打开
4. 在打开的列表中选择ios Developmen->点击create
5. 点击菜单栏上window->Devices 将手机连到电脑上
6. 在打开项目中，将项目中ios Deployment Target中改成手机对应的系统版本
7. 选择真机测试
8. 然后点击team
9. 选择刚才添加的账号
10. 然后点击fix issue
11. xcode会自动生成Provisioning profiles
12. 点击xcode->prefences
13. 双击进入
14. 选中刚才的项目，show in finder
15. 双击文件， 文件会自动安装， 回到原处后点击Done关闭
16. 点击菜单window->Devices
17. 选择手机右击，然后点击show Provisioning profiles
18. 看到项目后，点击done关闭
19. 点击运行。（如果碰到server can not connect则在info.plist文件中的NSAppTransportSecurity添加<dict><key>NSAllowsArbitraryLoads</key><true/>）
