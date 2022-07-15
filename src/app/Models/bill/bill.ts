export class Bill{
  bill_id: number = 0;
  consumer_id: string = '';
  consumer_name: string = '';
  units_consumed: number = 0;
  amount: number = 0;
  bill_date?: Date;
  paid_date?: Date;
  paid: boolean = false;
}