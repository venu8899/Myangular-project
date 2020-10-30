export class PurchaseOrder {
    private _vendor: string;
    private _orderNo: number;
    private _orderItem: string;
    private _orderDate: Date;
    private _orderAmount: number;
    private _contact: number;
    private _approvedby: string;
    private _address: any;

    public get vendor(): string {
        return this._vendor;
    }
    public set vendor(value: string) {
        this._vendor = value;
    }
    public get orderNo(): number {
        return this._orderNo;
    }
    public set orderNo(value: number) {
        this._orderNo = value;
    }

    public get orderItem(): string {
        return this._orderItem;
    }
    public set orderItem(value: string) {
        this._orderItem = value;
    }

    public get orderDate(): Date {
        return this._orderDate;
    }
    public set orderDate(value: Date) {
        this._orderDate = value;
    }

    public get orderAmount(): number {
        return this._orderAmount;
    }
    public set orderAmount(value: number) {
        this._orderAmount = value;
    }
    public get contact(): number {
        return this._contact;
    }
    public set contact(value: number) {
        this._contact = value;
    }
    public get approvedby(): string {
        return this._approvedby;
    }
    public set approvedby(value: string) {
        this._approvedby = value;
    }
    public get address(): any {
        return this._address;
    }
    public set address(value: any) {
        this._address = value;
    }
}