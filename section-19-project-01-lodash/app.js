const customers = ['Alex', 'Ann', 'Andrew']

const activeCustomers = ['Alex', 'Ann']

const inactiveCustomers = _.difference(customers, activeCustomers)

console.log(inactiveCustomers)