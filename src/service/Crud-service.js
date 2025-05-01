class CrudService {

    constructor(repo) {
        this.repository = new repo();
    }

    async create(data) {

        try {
            const result = await this.repository.create(data);
            return result;
        } catch (error) {
            console.log(error);
            throw error;
        }

    }
    async delete(id) {

        try {
            const result = await this.repository.delete(id);
            return result;
        } catch (error) {
            console.log(error);
            throw error;
        }

    }
    async update(data) {

        try {
            const result = await this.repository.update(id,data,{new : true});
            return result;
        } catch (error) {
            console.log(error);
            throw error;
        }

    }

    async get(id) {
        try {
            const result = await this.repository.get(id);
            return result;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}

module.exports = CrudService;