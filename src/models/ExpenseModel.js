export default class ExpenseModel{
    name;
    id;
    amount;
    userId;
    clusterId;
    categoryId;
    expenseDate;
    month;
    year;
    date;

    static fromJson(json){
        let e = new ExpenseModel();
        console.log("JSON");
        console.log(json);
        e.amount = json['amount'] ? json['amount'] : '0';
        e.name = json['name'] ? json['name'] : '';
        e.id = json['id'] ? json['id'] : '';
        e.userId = json['user_id'] ? json['user_id'] : '';
        e.categoryId = json['category'] ? json['category'] : '';
        e.expenseDate = json['expense_date'] ? json['expense_date'] : '';
        e.clusterId = json['cluster'] ? json['cluster'] : '';

        e.month = parseInt(e.expenseDate.substring(5, 7));
        e.year = parseInt(e.expenseDate.substring(0, 4));
        e.date = parseInt(e.expenseDate.substring(8, 10));
        return e;
    }

    toJson(){
        let dict = {};
        dict['id'] = this.id;
        dict['name'] = this.name;
        dict['amount'] = this.amount;
        dict['user_id'] = this.userId;
        dict['category'] = this.categoryId;
        dict['expense_date'] = this.expenseDate;
        dict['cluster'] = this.clusterId;
    }

}
