import { ListPage } from '../models/ListPage';
import { Searchable } from '../models/Searchable';
import { Sortable } from '../models/Sortable';
import { Address } from '../models/Address';
import { PartialDeep } from '../models/PartialDeep';
import { RequiredDeep } from '../models/RequiredDeep';
import { Filters } from '../models/Filters';
import { RequestOptions } from '../models/RequestOptions';
import httpClient from '../utils/HttpClient';
import OrderCloudError from '../utils/OrderCloudError';

class SupplierAddresses {
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
    * Get a list of supplier addresses. 
    * Check out the {@link https://ordercloud.io/api-reference/suppliers/supplier-addresses/list|api docs} for more info 
    * 
    * @param supplierID ID of the supplier.
    * @param listOptions.search Word or phrase to search for.
    * @param listOptions.searchOn Comma-delimited list of fields to search on.
    * @param listOptions.sortBy Comma-delimited list of fields to sort by.
    * @param listOptions.page Page of results to return. Default: 1
    * @param listOptions.pageSize Number of results to return per page. Default: 20, max: 100.
    * @param listOptions.filters An object whose keys match the model, and the values are the values to filter by
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    */
    public async List<TAddress extends Address>(supplierID: string,  listOptions: { search?: string, searchOn?: Searchable<'SupplierAddresses.List'>, sortBy?: Sortable<'SupplierAddresses.List'>, page?: number, pageSize?: number, filters?: Filters<Required<TAddress>> } = {}, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<ListPage<TAddress>>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/suppliers/${supplierID}/addresses`, { ...requestOptions, impersonating, params: { ...listOptions,  filters: listOptions.filters,  } } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Create a new supplier address. If ID is provided and an object with that ID already exists, a 409 (conflict) error is returned.
    * Check out the {@link https://ordercloud.io/api-reference/suppliers/supplier-addresses/create|api docs} for more info 
    * 
    * @param supplierID ID of the supplier.
    * @param address Required fields: Street1, City, State, Zip, Country
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    */
    public async Create<TAddress extends Address>(supplierID: string, address: Address, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TAddress>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.post(`/suppliers/${supplierID}/addresses`, address, { ...requestOptions, impersonating, params: {   } } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Get a single supplier address. 
    * Check out the {@link https://ordercloud.io/api-reference/suppliers/supplier-addresses/get|api docs} for more info 
    * 
    * @param supplierID ID of the supplier.
    * @param addressID ID of the address.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    */
    public async Get<TAddress extends Address>(supplierID: string, addressID: string,  requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TAddress>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.get(`/suppliers/${supplierID}/addresses/${addressID}`, { ...requestOptions, impersonating, params: {   } } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Create or update a supplier address. If an object with the same ID already exists, it will be overwritten.
    * Check out the {@link https://ordercloud.io/api-reference/suppliers/supplier-addresses/save|api docs} for more info 
    * 
    * @param supplierID ID of the supplier.
    * @param addressID ID of the address.
    * @param address Required fields: Street1, City, State, Zip, Country
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    */
    public async Save<TAddress extends Address>(supplierID: string, addressID: string, address: Address, requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TAddress>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.put(`/suppliers/${supplierID}/addresses/${addressID}`, address, { ...requestOptions, impersonating, params: {   } } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Delete a supplier address. 
    * Check out the {@link https://ordercloud.io/api-reference/suppliers/supplier-addresses/delete|api docs} for more info 
    * 
    * @param supplierID ID of the supplier.
    * @param addressID ID of the address.
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    */
    public async Delete(supplierID: string, addressID: string,  requestOptions: RequestOptions = {} ): Promise<void> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.delete(`/suppliers/${supplierID}/addresses/${addressID}`, { ...requestOptions, impersonating, params: {   } } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

   /**
    * Partially update a supplier address. 
    * Check out the {@link https://ordercloud.io/api-reference/suppliers/supplier-addresses/patch|api docs} for more info 
    * 
    * @param supplierID ID of the supplier.
    * @param addressID ID of the address.
    * @param address 
    * @param requestOptions.accessToken Provide an alternative token to the one stored in the sdk instance (useful for impersonation).
    * @param requestOptions.cancelToken Provide an [axios cancelToken](https://github.com/axios/axios#cancellation) that can be used to cancel the request.
    */
    public async Patch<TAddress extends Address>(supplierID: string, addressID: string, address: PartialDeep<Address>,  requestOptions: RequestOptions = {} ): Promise<RequiredDeep<TAddress>> {
        const impersonating = this.impersonating;
        this.impersonating = false;
        return await httpClient.patch(`/suppliers/${supplierID}/addresses/${addressID}`, address, { ...requestOptions, impersonating, params: {   } } )
        .catch(ex => {
            if(ex.response) {
                throw new OrderCloudError(ex)
            }
            throw ex;
        })
    }

    /**
     * @description 
     * enables impersonation by calling the subsequent method with the stored impersonation token
     * 
     * @example
     * SupplierAddresses.As().List() // lists SupplierAddresses using the impersonated users' token
     */
    public As(): this {
        this.impersonating = true;
        return this;
    }
}

export default new SupplierAddresses();