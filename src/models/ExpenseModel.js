class ExpenseModel{
    name;
    id;
    amount;
    userId;
    clusterId;
    categoryId;
    expenseDate;


    static fromJson({jsonMap}){
        let e = new ExpenseModel();
        e.amount = jsonMap['amount'];
        e.name = jsonMap['name'];
        e.id = jsonMap['id'];
        e.userId = jsonMap['user_id'];
        e.categoryId = jsonMap['category_id'];
        e.expenseDate = jsonMap['expense_date'];
        e.clusterId = jsonMap['cluster']
    }

}
