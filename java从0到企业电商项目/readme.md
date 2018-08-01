
[项目线上地址](http://www.happymmall.com)
[资源下载地址](http://learning.happymmall.com/env.html)

# linux 命令
  1. jdk安装
    rpm -qa | grep jdk // 查看自带jdk，然后卸载
    sudo yum remove XXX // 卸载
    sudo chmod 777 jdk-7u80-linux-x64.rpm // 赋予权限 是的这个文件在任何用户权限下都可以执行
    rpm -ivh jdk-7u80-linux-x64.rpm // 安装
    /usr/java  // 默认安装路径（例如：/usr/java/jdk1.7.0_80）
    ```
      // jdk环境变量配置

    ```
# Mysql安装（linux安装）
  - 中文乱码问题
    1. 在5.1版本时，为了解决中文乱码问题，my.ini内[mysql]和[mysqld]中都写： default-character-set=utf-8
    2. 在5.5版本时，[mysql]可以这么写，[mysqld]内不能在这么写了：而是写 character-set-server=utf-8
  - 自启动配置
    1. 执行chkconfig mysqld on
    2. 执行chkconfig --list mysqld 查看（如果2-5位启用on状态即OK）
  - mysql
    dql： select
    dml： insert、 update、 delete
    ddl： create table 
          create view
    dcl： grant
    `yum -y install mysql-server` // 安装mysql
    `service mysqld start`
  
  * tips *
    1. yum -y // 默认为Y操作
    2. 启示录【3：5】凡得胜的，必这样穿白衣，我



     
 