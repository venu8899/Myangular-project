export class Mystore {
    private _electronics: string;
    private _kidsware: string;
    private _vegitables: string;
    private _mensWare: string;
    private _womensWare: string;

    public get electronics(): string {
        return this._electronics;
    }
    public set electronics(value: string) {
        this._electronics = value;
    }
    public get kidsware(): string {
        return this.kidsware;
    }
    public set kidsware(value: string) {
        this.kidsware = value;
    }
    public get vegitables(): string {
        return this._vegitables;
    }
    public set vegitables(value: string) {
        this._vegitables = value;
    }
    public get mensWare(): string {
        return this._mensWare;
    }
    public set mensWare(value: string) {
        this._mensWare = value;
    }
    public get womensWare(): string {
        return this._womensWare;
    }
    public set womensWare(value: string) {
        this._womensWare = value;
    }
}