var SqlString = require('sqlstring'); // 对sql语句进行转义，防止sql注入
const TB_PAGE_TEMPLATE = 'page_template';

exports.pageTemplate = {
    queryList: () => { 
      return SqlString.format(`select * from ${TB_PAGE_TEMPLATE}`)
    },
    queryDetail: (id) => { 
      return SqlString.format(`select * from ${TB_PAGE_TEMPLATE} where id = ?`, [id])
    },
    create: (payload) => {
      return SqlString.format(`insert into ${TB_PAGE_TEMPLATE}(name, content) values(? , ?)`, [payload.name, payload.content])
    },
    update: (id, payload) => {
      return  SqlString.format(`update ${TB_PAGE_TEMPLATE} set name = ?, content = ? where id = ?`, [payload.name, payload.content, id])
    },
    remove: (id) => {
      return SqlString.format(`delete from ${TB_PAGE_TEMPLATE} where id = ?`, [id])
    },
}