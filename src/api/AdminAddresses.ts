import { ListPage } from '../models/ListPage';
import { Address } from '../models/Address';
import { PartialDeep } from '../models/PartialDeep';
import { RequiredDeep } from '../models/RequiredDeep';
import { Filters } from '../models/Filters';
import httpClient from '../utils/HttpClient';

class AdminAddresses {
    private impersonating:boolean = false;

    /**
    * @ignore
    * not part of public api, don't include in generated docs
    */
    constructor() {
        this.List = this.List.bind(this);
        this.Create = this.Create.bind(this);
        this.Get = this.Get.bind(this);
        this.Save = this.Save.bind(this);
        this.Delete = this.Delete.bind(this);
        this.Patch = this.Patch.bind(this);
    }

   /**
    * @param options.search Word or phrase to search for.
    * @param options.searchOn Comma-delimited list of fields to search on.
    * @param options.sortBy Comma-delimited list of fields to sort by.
    * @param options.page Page of results to return. Default: 1
    * @param options.pageSize Number of results to return per page. Default: 20, max: 100.
    * @param options.filters An object whose keys match the model, and the values are the values to filter by
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async List<TAddress extends Address>( options: { search?: string, searchOn?: string[], sortBy?: string[], page?: number, pageSize?: number, filters?: Filters<Required<TAddress>> } = {}, accessToken?: string ): Promise<RequiredDeep<ListPage<TAddress>>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/addresses`, { params: { ...options, filters: options.filters, accessToken, impersonating } } );
    }

   /**
    * @param address Required fields: Street1, City, State, Zip, Country
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Create<TAddress extends Address>(address: Address, accessToken?: string ): Promise<RequiredDeep<TAddress>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.post(`/addresses`, { data: address, params: { accessToken, impersonating } }  );
    }

   /**
    * @param addressID ID of the address.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Get<TAddress extends Address>(addressID: string,  accessToken?: string ): Promise<RequiredDeep<TAddress>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/addresses/${addressID}`, { params: { accessToken, impersonating } } );
    }

   /**
    * @param addressID ID of the address.
    * @param address Required fields: Street1, City, State, Zip, Country
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Save<TAddress extends Address>(addressID: string, address: Address, accessToken?: string ): Promise<RequiredDeep<TAddress>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.put(`/addresses/${addressID}`, { data: address, params: { accessToken, impersonating } }  );
    }

   /**
    * @param addressID ID of the address.
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Delete(addressID: string,  accessToken?: string ): Promise<void> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.delete(`/addresses/${addressID}`, { params: { accessToken, impersonating } } );
    }

   /**
    * @param addressID ID of the address.
    * @param address 
    * @param accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    */
    public async Patch<TAddress extends Address>(addressID: string, address: PartialDeep<Address>,  accessToken?: string ): Promise<RequiredDeep<TAddress>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.patch(`/addresses/${addressID}`, { data: address, params: { accessToken, impersonating } }  );
    }

    /**
     * @description 
     * enables impersonation by calling the subsequent method with the stored impersonation token
     * 
     * @example
     * AdminAddresses.As().List() // lists AdminAddresses using the impersonated users' token
     */
    public As(): this {
        this.impersonating = true;
        return this;
    }
}

export default new AdminAddresses();