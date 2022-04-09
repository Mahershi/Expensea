import GlobalVars from "../helpers/GlobalVars";

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

    returnCopy(){
        let copy = new ExpenseModel();
        copy.id = this.id;
        copy.userId = this.userId;
        copy.expenseDate = this.expenseDate;
        copy.name = this.name;
        copy.clusterId = this.clusterId;
        copy.categoryId = this.categoryId;
        copy.amount = this.amount;

        copy.date = this.date;
        copy.month = this.month;
        copy.year = this.year;

        return copy;

    }

    static fromJson(json){
        let e = new ExpenseModel();
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

    static fromProp(json){
        let e = new ExpenseModel();
        e.amount = json['amount'] ? json['amount'] : '0';
        e.name = json['name'] ? json['name'] : '';
        e.id = json['id'] ? json['id'] : null;
        e.userId = json['userId'] ? json['userId'] : '';
        e.categoryId = json['categoryId'] ? json['categoryId'] : '';
        e.expenseDate = json['expenseDate'] ? json['expenseDate'] : '';
        e.clusterId = json['clusterId'] ? json['clusterId'] : null;


        return e;
    }

    // TODO: GlobalVars setup
    static newDefault(){
        let e = new ExpenseModel();
        e.id = null;
        e.name = '';
        e.amount = '';
        // e.userId = GlobalVars.currentUser.id;
        e.userId = 1;
        e.categoryId = 1;
        e.clusterId = null;
        e.expenseDate = new Date();

        return e;
    }

    static newForMonthYear({monthIndex, year}){
        let e = new ExpenseModel();
        e.id = null;
        e.name = '';
        e.amount = '';
        // e.userId = GlobalVars.currentUser.id;
        e.userId = 1;
        e.categoryId = 1;
        e.clusterId = null;
        e.expenseDate = new Date(year, monthIndex, 1);

        return e;
    }

    toJson(){
        let dict = {};
        // dict['id'] = this.id;
        dict['name'] = this.name;
        dict['amount'] = parseInt(this.amount);
        dict['user_id'] = parseInt(this.userId);
        dict['category'] = this.categoryId;
        dict['expense_date'] = this.expenseDate;
        dict['cluster'] = this.clusterId;

        return dict;
    }



}
