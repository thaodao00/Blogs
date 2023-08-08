module.exports = {
    multipleMysqlToObject: function (mysqlArray) {
        return mysqlArray.map((mysql) => mysql.toObject());
    },
    mysqlToObject: function (mysql) {
        return mysql ? mysql.toObject() : mysql;
    },
};
