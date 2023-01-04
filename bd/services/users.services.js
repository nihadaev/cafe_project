class UsersService {

    static connection = null

    static async getAll() {
    const [rows] = await UsersService.connection.query('select * from products')
    return rows
    }

    static init(connection) {
        UsersService.connection = connection
    }
}

module.exports = UsersService;