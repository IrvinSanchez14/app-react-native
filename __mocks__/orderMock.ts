import { Order, IOrder } from '_modules/models/NSwag';
import Faker from 'faker';

export const getOrder: IOrder =  new Order(setOrder());

const orders: Array<IOrder> = [];

Array(10).fill(null).map(()=>{ 
  orders.push(setOrder())
})

export const getOrders: Array<IOrder> = orders;

function setOrder(): IOrder{
  const order: IOrder = {
    phoneNumber: Faker.phone.phoneNumber(),
    faxNumber: Faker.phone.phoneNumber(),
    primaryContact: Faker.phone.phoneNumber(),
    email: Faker.internet.email(),
    csr: Faker.phone.phoneNumber(),
    terms: Faker.lorem.paragraph(),
    territory: Faker.phone.phoneNumber(),
    priceCode: Faker.random.number().toString(),
    accountBalance: Faker.finance.amount(),
    onOrder: Faker.phone.phoneNumber(),
    availableCredit: Faker.finance.amount(),
    taxId: Faker.random.uuid(),
    taxExemptStatus: Faker.random.boolean().toString(),
    sicCode: Faker.random.number().toString(),
    marketingId: Faker.random.uuid(),
    lastSaleDate: Faker.date.recent()
  }
  return order;
} 
