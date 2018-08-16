# 哈哈哈
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
  # 数据库
    - 时间戳（查业务问题的后悔药）
      create_time : 数据创建的时间
      update_time: 数据更新的时间
      
  # mybatis
    ```
      select 
        <include refid="Base_Column_List"/>
      form mmall_user
      where username = #{username}
      and password = #{password}
    ```
  * tips *
    1. yum -y // 默认为Y操作
    2. 启示录【3：5】凡得胜的，必这样穿白衣，我
    1. restlet client 和postman同类型的软件
    1. FE助手 （格式化json）
    1. 
      // 使之不在序列化结果当中
      @JsonIgnore 
      // 保证序列化json的时候，如果是null的对象， key也会消失
      @JsonSerialize(include = JsonSerialize.Inclusion.NON_NULL) 
    1. 找到实现类对象的方法调用并选中，ctrl + t，
    1. eclipse 快捷键  ctrl+alt+箭头下  快速复制当前行到下一行  （如果遇到屏幕倒转的情况  可以在屏幕上鼠标右键 快捷键 禁用即可。）
     
 