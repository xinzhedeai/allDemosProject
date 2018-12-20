#5章

    ```
      getParaToInt('transAmount'); // 获取参数并将其类型转化为int类型的
      Db.update("update account set cash = cash - ? where id = ?", transAmount, fromAccountId);
      // 开启事务 声明式
      @Before(Tx.class)
      // cache 提高性能、
      // 多数据库支持、方言的配置
      public class DemoConfig extends JFinalConfig{
        public void configPlugin(Plugins me){
          ActiveRecordPlugin arp = new ActiveRecordPlugin();
          me.add(arp);
          // 配置Postgresql方言
          arp.setDialect(new PostgresqlDialect());
        }
      }

    ```

# 注意：
  1. Mysql数据库表必须设置为InnoDB引擎时才支持事务，MyISAM并不支持事务。
