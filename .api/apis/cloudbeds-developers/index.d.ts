import type * as types from './types';
import type { ConfigOptions, FetchResponse } from 'api/dist/core';
import Oas from 'oas';
import APICore from 'api/dist/core';
declare class SDK {
    spec: Oas;
    core: APICore;
    constructor();
    /**
     * Optionally configure various options that the SDK allows.
     *
     * @param config Object of supported SDK options and toggles.
     * @param config.timeout Override the default `fetch` request timeout of 30 seconds. This number
     * should be represented in milliseconds.
     */
    config(config: ConfigOptions): void;
    /**
     * If the API you're using requires authentication you can supply the required credentials
     * through this method and the library will magically determine how they should be used
     * within your API request.
     *
     * With the exception of OpenID and MutualTLS, it supports all forms of authentication
     * supported by the OpenAPI specification.
     *
     * @example <caption>HTTP Basic auth</caption>
     * sdk.auth('username', 'password');
     *
     * @example <caption>Bearer tokens (HTTP or OAuth 2)</caption>
     * sdk.auth('myBearerToken');
     *
     * @example <caption>API Keys</caption>
     * sdk.auth('myApiKey');
     *
     * @see {@link https://spec.openapis.org/oas/v3.0.3#fixed-fields-22}
     * @see {@link https://spec.openapis.org/oas/v3.1.0#fixed-fields-22}
     * @param values Your auth credentials for the API; can specify up to two strings or numbers.
     */
    auth(...values: string[] | number[]): this;
    /**
     * If the API you're using offers alternate server URLs, and server variables, you can tell
     * the SDK which one to use with this method. To use it you can supply either one of the
     * server URLs that are contained within the OpenAPI definition (along with any server
     * variables), or you can pass it a fully qualified URL to use (that may or may not exist
     * within the OpenAPI definition).
     *
     * @example <caption>Server URL with server variables</caption>
     * sdk.server('https://{region}.api.example.com/{basePath}', {
     *   name: 'eu',
     *   basePath: 'v14',
     * });
     *
     * @example <caption>Fully qualified server URL</caption>
     * sdk.server('https://eu.api.example.com/v14');
     *
     * @param url Server URL
     * @param variables An object of variables to replace into the server URL.
     */
    server(url: string, variables?: {}): void;
    /**
     * In the context of properties being distributed across multiple localizations, this
     * endpoint serves to retrieve the precise location of the property associated with the
     * provided access token. Further information can be found in the [Authentication
     * guide](https://integrations.cloudbeds.com/hc/en-us/sections/14731510501915-Authentication).
     *
     * @summary metadata
     */
    getOauthMetadata(): Promise<FetchResponse<200, types.GetOauthMetadataResponse200>>;
    /**
     * Query the authorization server for an access token used to access property
     * resources.</br> If the automatic delivery method for API keys is used, the grant type
     * `urn:ietf:params:oauth:grant-type:api-key` needs to be used to request an API key. This
     * grant type requires `grant_type=urn:ietf:params:oauth:grant-type:api-key`, `client_id`,
     * `client_secret`, `redirect_uri` and `code`.</br> For OAuth 2.0., two different grant
     * types (`authorization_code`, `refresh_token`) are supported. Authorization code grant
     * type requires `grant_type=authorization_code`, `client_id`, `client_secret`,
     * `redirect_uri`, `code`. Refresh token grant type requires `grant_type=refresh_token`,
     * `client_id`, `client_secret`, `refresh_token`.</br> Read the [Authentication
     * guide](https://integrations.cloudbeds.com/hc/en-us/sections/14731510501915-Authentication)
     * for implementation tips, user flows and testing advice.
     *
     * @summary access_token
     */
    postAccess_token(body?: types.PostAccessTokenFormDataParam): Promise<FetchResponse<200, types.PostAccessTokenResponse200>>;
    /**
     * Returns information on user who authorized connection
     *
     * @summary userinfo
     */
    getUserinfo(metadata?: types.GetUserinfoMetadataParam): Promise<FetchResponse<200, types.GetUserinfoResponse200>>;
    /**
     * Voids the AdjustmentID transaction on the specified reservationID
     *
     * @summary deleteAdjustment
     */
    deleteadjustment(metadata: types.DeleteadjustmentMetadataParam): Promise<FetchResponse<200, types.DeleteadjustmentResponse200>>;
    /**
     * Adds an adjustment to a reservation
     *
     * @summary postAdjustment
     */
    postadjustment(body?: types.PostadjustmentFormDataParam): Promise<FetchResponse<200, types.PostadjustmentResponse200>>;
    /**
     * Retreive allotment blocks @apiQuery {Integer} propertyID Property ID
     *
     * @summary createAllotmentBlock
     */
    postCreateallotmentblock(body?: types.PostCreateallotmentblockFormDataParam): Promise<FetchResponse<200, types.PostCreateallotmentblockResponse200>>;
    /**
     * Delete allotment blocks
     *
     * @summary deleteAllotmentBlock
     */
    postDeleteallotmentblock(body?: types.PostDeleteallotmentblockFormDataParam): Promise<FetchResponse<200, types.PostDeleteallotmentblockResponse200>>;
    /**
     * Retrieve allotment blocks
     *
     * @summary getAllotmentBlocks
     */
    getallotmentblocks(metadata: types.GetallotmentblocksMetadataParam): Promise<FetchResponse<200, types.GetallotmentblocksResponse200>>;
    /**
     * Update an allotment block @apiQuery {Integer} propertyID Property ID
     *
     * @summary updateAllotmentBlock
     */
    postUpdateallotmentblock(body?: types.PostUpdateallotmentblockFormDataParam): Promise<FetchResponse<200, types.PostUpdateallotmentblockResponse200>>;
    /**
     * Add a note to an allotment block
     *
     * @summary createAllotmentBlockNotes
     */
    postCreateallotmentblocknotes(body?: types.PostCreateallotmentblocknotesFormDataParam): Promise<FetchResponse<200, types.PostCreateallotmentblocknotesResponse200>>;
    /**
     * List notes added to an allotment block
     *
     * @summary listAllotmentBlockNotes
     */
    getListallotmentblocknotes(metadata: types.GetListallotmentblocknotesMetadataParam): Promise<FetchResponse<200, types.GetListallotmentblocknotesResponse200>>;
    /**
     * Update a note on an allotment block
     *
     * @summary updateAllotmentBlockNotes
     */
    postUpdateallotmentblocknotes(body?: types.PostUpdateallotmentblocknotesFormDataParam): Promise<FetchResponse<200, types.PostUpdateallotmentblocknotesResponse200>>;
    /**
     * deleteAppPropertySettings
     *
     */
    postDeleteapppropertysettings(body?: types.PostDeleteapppropertysettingsFormDataParam): Promise<FetchResponse<200, types.PostDeleteapppropertysettingsResponse200>>;
    /**
     * Returns the app property settings
     *
     * @summary getAppPropertySettings
     */
    getapppropertysettings(metadata: types.GetapppropertysettingsMetadataParam): Promise<FetchResponse<200, types.GetapppropertysettingsResponse200>>;
    /**
     * postAppPropertySettings
     *
     */
    postapppropertysettings(body?: types.PostapppropertysettingsFormDataParam): Promise<FetchResponse<200, types.PostapppropertysettingsResponse200>>;
    /**
     * putAppPropertySettings
     *
     */
    postPutapppropertysettings(body?: types.PostPutapppropertysettingsFormDataParam): Promise<FetchResponse<200, types.PostPutapppropertysettingsResponse200>>;
    /**
     * Get currency settings
     *
     * @summary getCurrencySettings
     */
    getcurrencysettings(metadata?: types.GetcurrencysettingsMetadataParam): Promise<FetchResponse<200, types.GetcurrencysettingsResponse200>>;
    /**
     * Gets custom fields list<br /> ¹ data.displayed = "booking" - Display this field to
     * guests on the booking engine.<br /> ¹ data.displayed = "reservation" - Add this field to
     * the reservation folio for use by staff.<br /> ¹ data.displayed = "card" - Make this
     * field available for registration cards.<br />
     *
     * @summary getCustomFields
     */
    getcustomfields(metadata?: types.GetcustomfieldsMetadataParam): Promise<FetchResponse<200, types.GetcustomfieldsResponse200>>;
    /**
     * Sets custom fields. The call should only be made once to add the field to the system.
     *
     * @summary postCustomField
     */
    postcustomfield(body?: types.PostcustomfieldFormDataParam): Promise<FetchResponse<200, types.PostcustomfieldResponse200>>;
    /**
     * Returns basic information about the current state of the hotel
     *
     * @summary getDashboard
     */
    getdashboard(metadata?: types.GetdashboardMetadataParam): Promise<FetchResponse<200, types.GetdashboardResponse200>>;
    /**
     * Returns a list of all existing email templates. This call is only available for
     * third-party integration partners, and not for property client IDs.
     *
     * @summary getEmailTemplates
     */
    getemailtemplates(metadata?: types.GetemailtemplatesMetadataParam): Promise<FetchResponse<200, types.GetemailtemplatesResponse200>>;
    /**
     * Creates a new email template. See the full list of available language parameters <a
     * href="https://integrations.cloudbeds.com/hc/en-us/articles/360007144993-FAQ#methods-and-parameters">here</a>.
     * This call is only available for third-party integration partners, and not for property
     * client IDs.
     *
     * @summary postEmailTemplate
     */
    postemailtemplate(body?: types.PostemailtemplateFormDataParam): Promise<FetchResponse<200, types.PostemailtemplateResponse200>>;
    /**
     * Returns a list of all existing email scheduling. This call is only available for
     * third-party integration partners, and not for property client IDs.
     *
     * @summary getEmailSchedule
     */
    getemailschedule(metadata?: types.GetemailscheduleMetadataParam): Promise<FetchResponse<200, types.GetemailscheduleResponse200>>;
    /**
     * Creates a new email schedule for existing email template. Email template can be
     * scheduled based on two parameters: reservationStatusChange and reservationEvent. Only
     * one of the parameters can be used. *reservationStatusChange* schedules email to be sent
     * when reservation status transitions to a specific one, for instance: `confirmed`.
     * *reservationEvent* schedules email to be sent number of days prior or after a specific
     * event, for instance: `after_check_out` at a given time This call is only available for
     * third-party integration partners, and not for property client IDs.
     *
     * @summary postEmailSchedule
     */
    postemailschedule(body?: types.PostemailscheduleFormDataParam): Promise<FetchResponse<200, types.PostemailscheduleResponse200>>;
    /**
     * Returns group notes
     *
     * @summary getGroupNotes
     */
    getgroupnotes(metadata: types.GetgroupnotesMetadataParam): Promise<FetchResponse<200, types.GetgroupnotesResponse200>>;
    /**
     * Returns the groups for a property
     *
     * @summary getGroups
     */
    getgroups(metadata: types.GetgroupsMetadataParam): Promise<FetchResponse<200, types.GetgroupsResponse200>>;
    /**
     * Updates an existing group with information provided. At least one information field is
     * required for this call.
     *
     * @summary patchGroup
     */
    postPatchgroup(body?: types.PostPatchgroupFormDataParam): Promise<FetchResponse<200, types.PostPatchgroupResponse200>>;
    /**
     * Adds a group note
     *
     * @summary postGroupNote
     */
    postgroupnote(body?: types.PostgroupnoteFormDataParam): Promise<FetchResponse<200, types.PostgroupnoteResponse200>>;
    /**
     * Adds a group to the property. Please note that the default setting for 'Route to Group
     * Folio' will be 'No,' and the 'Reservation Folio Configuration' will be set as the
     * default folio configuration. You can edit these settings through the user interface
     * (UI).
     *
     * @summary putGroup
     */
    postPutgroup(body?: types.PostPutgroupFormDataParam): Promise<FetchResponse<200, types.PostPutgroupResponse200>>;
    /**
     * Returns information on a guest specified by the Reservation ID parameter
     *
     * @summary getGuest
     */
    getguest(metadata?: types.GetguestMetadataParam): Promise<FetchResponse<200, types.GetguestResponse200>>;
    /**
     * Returns a list of guests, ordered by modification date ### Group account support
     *
     * @summary getGuestList
     */
    getguestlist(metadata?: types.GetguestlistMetadataParam): Promise<FetchResponse<200, types.GetguestlistResponse200>>;
    /**
     * Returns a list of guests based on their modification date. Note that when a guest checks
     * in or checks out of a room, their record is modified at that time. If no date range is
     * passed, only the records for the current day are returned. Also note that if the guest
     * is assigned to multiple rooms, it will result in multiple records. ### Group account
     * support
     *
     * @summary getGuestsModified
     */
    getguestsmodified(metadata?: types.GetguestsmodifiedMetadataParam): Promise<FetchResponse<200, types.GetguestsmodifiedResponse200>>;
    /**
     * Returns a list of guests in the current status (Not Checked In, In House, Checked Out or
     * Cancelled), sorted by modification date. If no date range is passed, it returns all
     * guests with the selected status. ### Group account support
     *
     * @summary getGuestsByStatus
     */
    getguestsbystatus(metadata: types.GetguestsbystatusMetadataParam): Promise<FetchResponse<200, types.GetguestsbystatusResponse200>>;
    /**
     * Returns a list of guests matching the selected parameters ### Group account support
     *
     * @summary getGuestsByFilter
     */
    getguestsbyfilter(metadata: types.GetguestsbyfilterMetadataParam): Promise<FetchResponse<200, types.GetguestsbyfilterResponse200>>;
    /**
     * Adds a guest note
     *
     * @summary postGuestNote
     */
    postguestnote(body?: types.PostguestnoteFormDataParam): Promise<FetchResponse<200, types.PostguestnoteResponse200>>;
    /**
     * Retrieves a guest notes
     *
     * @summary getGuestNotes
     */
    getguestnotes(metadata: types.GetguestnotesMetadataParam): Promise<FetchResponse<200, types.GetguestnotesResponse200>>;
    /**
     * Updates an existing guest note.
     *
     * @summary putGuestNote
     */
    putguestnote(body?: types.PutguestnoteFormDataParam): Promise<FetchResponse<200, types.PutguestnoteResponse200>>;
    /**
     * Archives an existing guest note.
     *
     * @summary deleteGuestNote
     */
    deleteguestnote(metadata: types.DeleteguestnoteMetadataParam): Promise<FetchResponse<200, types.DeleteguestnoteResponse200>>;
    /**
     * Updates an existing guest with information provided. At least one information field is
     * required for this call.
     *
     * @summary putGuest
     */
    putguest(body?: types.PutguestFormDataParam): Promise<FetchResponse<200, types.PutguestResponse200>>;
    /**
     * Attaches a document to a guest
     *
     * @summary postGuestDocument
     */
    postguestdocument(body?: types.PostguestdocumentFormDataParam): Promise<FetchResponse<200, types.PostguestdocumentResponse200>>;
    /**
     * Adds a guest to reservation as an additional guest.
     *
     * @summary postGuest
     */
    postguest(body?: types.PostguestFormDataParam): Promise<FetchResponse<200, types.PostguestResponse200>>;
    /**
     * Assigns guest(s) to a room in a reservation and adds these guests as additional guests.
     *
     * @summary postGuestsToRoom
     */
    postgueststoroom(body?: types.PostgueststoroomFormDataParam): Promise<FetchResponse<200, types.PostgueststoroomResponse200>>;
    /**
     * Attaches a photo to a guest
     *
     * @summary postGuestPhoto
     */
    postguestphoto(body?: types.PostguestphotoFormDataParam): Promise<FetchResponse<200, types.PostguestphotoResponse200>>;
    /**
     * Returns a list of hotels, filtered by the parameters passed ### Group account support
     *
     * @summary getHotels
     */
    gethotels(metadata?: types.GethotelsMetadataParam): Promise<FetchResponse<200, types.GethotelsResponse200>>;
    /**
     * Returns the details of a specific hotel, identified by "propertyID"
     *
     * @summary getHotelDetails
     */
    gethoteldetails(metadata?: types.GethoteldetailsMetadataParam): Promise<FetchResponse<200, types.GethoteldetailsResponse200>>;
    /**
     * Attaches a file to a hotel
     *
     * @summary postFile
     */
    postfile(body?: types.PostfileFormDataParam): Promise<FetchResponse<200, types.PostfileResponse200>>;
    /**
     * Returns a list of files attached to a hotel or group profile, ordered by creation date
     *
     * @summary getFiles
     */
    getfiles(metadata?: types.GetfilesMetadataParam): Promise<FetchResponse<200, types.GetfilesResponse200>>;
    /**
     * Pulls list of active house accounts
     *
     * @summary getHouseAccountList
     */
    gethouseaccountlist(metadata?: types.GethouseaccountlistMetadataParam): Promise<FetchResponse<200, types.GethouseaccountlistResponse200>>;
    /**
     * Add a new House Account
     *
     * @summary postNewHouseAccount
     */
    postnewhouseaccount(body?: types.PostnewhouseaccountFormDataParam): Promise<FetchResponse<200, types.PostnewhouseaccountResponse200>>;
    /**
     * Change specific house account to either open or closed.
     *
     * @summary putHouseAccountStatus
     */
    puthouseaccountstatus(body?: types.PuthouseaccountstatusFormDataParam): Promise<FetchResponse<200, types.PuthouseaccountstatusResponse200>>;
    /**
     * Returns the current date's housekeeping information The housekeeping status is
     * calculated basing on the set of fields roomOccupied | roomCondition | roomBlocked |
     * vacantPickup | roomBlocked | refusedService The available statuses are: - Vacant and
     * Dirty (VD): false | “dirty” | false | false | false | false - Occupied and Dirty (OD):
     * true | “dirty” | false | false | false | false - Vacant and Clean (VC): false | “clean”
     * | false | false | false | false - Occupied and Clean (OC): true | “clean” | false |
     * false | false | false - Occupied and Clean Inspected (OCI): true | “inspected” | false |
     * false | false | false - Vacant and Clean Inspected (VCI): false | “inspected” | false |
     * false | false | false - Do Not Disturb (DND): if doNotDisturb is true - Refused Service
     * (RS): if refusedService is true - Out of Order (OOO): if roomBlocked is true - Vacant
     * and Pickup (VP): if vacantPickup is true
     *
     * @summary getHousekeepingStatus
     */
    gethousekeepingstatus(metadata?: types.GethousekeepingstatusMetadataParam): Promise<FetchResponse<200, types.GethousekeepingstatusResponse200>>;
    /**
     * Switches the current date's housekeeping status for a specific room ID to either clean
     * or dirty The housekeeping status is calculated basing on the set of fields roomOccupied
     * | roomCondition | roomBlocked | vacantPickup | roomBlocked | refusedService The
     * available statuses are: - Vacant and Dirty (VD): false | “dirty” | false | false | false
     * | false - Occupied and Dirty (OD): true | “dirty” | false | false | false | false -
     * Vacant and Clean (VC): false | “clean” | false | false | false | false - Occupied and
     * Clean (OC): true | “clean” | false | false | false | false - Occupied and Clean
     * Inspected (OCI): true | “inspected” | false | false | false | false - Vacant and Clean
     * Inspected (VCI): false | “inspected” | false | false | false | false - Do Not Disturb
     * (DND): if doNotDisturb is true - Refused Service (RS): if refusedService is true - Out
     * of Order (OOO): if roomBlocked is true - Vacant and Pickup (VP): if vacantPickup is true
     *
     * @summary postHousekeepingStatus
     */
    posthousekeepingstatus(body?: types.PosthousekeepingstatusFormDataParam): Promise<FetchResponse<200, types.PosthousekeepingstatusResponse200>>;
    /**
     * Add New Housekeeper
     *
     * @summary postHousekeeper
     */
    posthousekeeper(body?: types.PosthousekeeperFormDataParam): Promise<FetchResponse<200, types.PosthousekeeperResponse200>>;
    /**
     * Edit Housekeeper Details
     *
     * @summary putHousekeeper
     */
    puthousekeeper(body?: types.PuthousekeeperFormDataParam): Promise<FetchResponse<200, types.PuthousekeeperResponse200>>;
    /**
     * Returns a list of housekeepers ### Group account support
     *
     * @summary getHousekeepers
     */
    gethousekeepers(metadata?: types.GethousekeepersMetadataParam): Promise<FetchResponse<200, types.GethousekeepersResponse200>>;
    /**
     * Assign rooms (single or multiple) to an existing housekeeper
     *
     * @summary postHousekeepingAssignment
     */
    posthousekeepingassignment(body?: types.PosthousekeepingassignmentFormDataParam): Promise<FetchResponse<200, types.PosthousekeepingassignmentResponse200>>;
    /**
     * Get the current app integration state for a property.<br /> This call is only available
     * for third-party integration partners, and not for property client IDs. Read the
     * [Connecting/Disconnecting Apps
     * guide](https://integrations.cloudbeds.com/hc/en-us/articles/360007613213-Connecting-Disconnecting-Apps)
     * to further understand the use cases.
     *
     * @summary getAppState
     */
    getappstate(metadata?: types.GetappstateMetadataParam): Promise<FetchResponse<200, types.GetappstateResponse200>>;
    /**
     * Update app integration state for a property ID. <br /> This call is only available for
     * third-party integration partners, and not for property client IDs. <br /> If an app is
     * set to 'disabled', it will remove all active sessions Read the [Connecting/Disconnecting
     * Apps
     * guide](https://integrations.cloudbeds.com/hc/en-us/articles/360007613213-Connecting-Disconnecting-Apps)
     * to further understand the use cases.
     *
     * @summary postAppState
     */
    postappstate(body?: types.PostappstateFormDataParam): Promise<FetchResponse<200, types.PostappstateResponse200>>;
    /**
     * Add a Government Receipt to a Reservation or House Account
     *
     * @summary postGovernmentReceipt
     */
    postgovernmentreceipt(body?: types.PostgovernmentreceiptFormDataParam): Promise<FetchResponse<200, types.PostgovernmentreceiptResponse200>>;
    /**
     * Get the current app settings for a property.<br />
     *
     * @summary getAppSettings
     */
    getappsettings(metadata?: types.GetappsettingsMetadataParam): Promise<FetchResponse<200, types.GetappsettingsResponse200>>;
    /**
     * Submit the error received by the hybrid integration from the partner to the MFD
     *
     * @summary postAppError
     */
    postapperror(body?: types.PostapperrorFormDataParam): Promise<FetchResponse<200, types.PostapperrorResponse200>>;
    /**
     * Subscribe a webhook for a specified event. Read the [Webhooks
     * guide](https://integrations.cloudbeds.com/hc/en-us/articles/360007612553-Webhooks) to
     * see available objects, actions, payload info and more.
     *
     * @summary postWebhook
     */
    postwebhook(body?: types.PostwebhookFormDataParam): Promise<FetchResponse<200, types.PostwebhookResponse200>>;
    /**
     * Remove subscription for webhook. Read the [Webhooks
     * guide](https://integrations.cloudbeds.com/hc/en-us/articles/360007612553-Webhooks) to
     * see available objects, actions, payload info and more. ### Group account support
     *
     * @summary deleteWebhook
     */
    deletewebhook(metadata: types.DeletewebhookMetadataParam): Promise<FetchResponse<200, types.DeletewebhookResponse200>>;
    /**
     * List webhooks for which the API client is subscribed to.
     *
     * @summary getWebhooks
     */
    getwebhooks(metadata?: types.GetwebhooksMetadataParam): Promise<FetchResponse<200, types.GetwebhooksResponse200>>;
    /**
     * Returns invoice data. This call is only available for third-party integration partners,
     * and not for property client IDs.
     *
     * @summary getInvoice
     */
    getinvoice(metadata: types.GetinvoiceMetadataParam): Promise<FetchResponse<200, types.GetinvoiceResponse200>>;
    /**
     * Update invoice state. This call is only available for third-party integration partners,
     * and not for property client IDs.
     *
     * @summary patchInvoice
     */
    postPatchinvoice(body?: types.PostPatchinvoiceFormDataParam): Promise<FetchResponse<200, types.PostPatchinvoiceResponse200>>;
    /**
     * Gets the details for the one itemID<br /> <sup>1</sup> only if data.stockInventory =
     * true<br> <sup>2</sup> Taxes, fees and totals will show up only if an item has assigned
     * tax or fee.<br>
     *
     * @summary getItem
     */
    getitem(metadata: types.GetitemMetadataParam): Promise<FetchResponse<200, types.GetitemResponse200>>;
    /**
     * Updates an item with information provided<br /> ¹ only if item.stockInventory = true<br
     * />
     *
     * @summary putItemToInventory
     */
    putitemtoinventory(body?: types.PutitemtoinventoryFormDataParam): Promise<FetchResponse<200, types.PutitemtoinventoryResponse200>>;
    /**
     * Gets all the items and their prices the hotel has created in myfrontdesk<br>
     * <sup>1</sup> only if data.stockInventory = true<br> <sup>2</sup> Taxes, fees and totals
     * will show up only if an item has assigned tax or fee.<br>
     *
     * @summary getItems
     */
    getitems(metadata?: types.GetitemsMetadataParam): Promise<FetchResponse<200, types.GetitemsResponse200>>;
    /**
     * Gets the item category list
     *
     * @summary getItemCategories
     */
    getitemcategories(metadata?: types.GetitemcategoriesMetadataParam): Promise<FetchResponse<200, types.GetitemcategoriesResponse200>>;
    /**
     * Adds new items category
     *
     * @summary postItemCategory
     */
    postitemcategory(body?: types.PostitemcategoryFormDataParam): Promise<FetchResponse<200, types.PostitemcategoryResponse200>>;
    /**
     * Adds new items batch<br /> ¹ only if item.stockInventory = true<br />
     *
     * @summary postItemsToInventory
     */
    postitemstoinventory(body?: types.PostitemstoinventoryFormDataParam): Promise<FetchResponse<200, types.PostitemstoinventoryResponse200>>;
    /**
     * Adds an item either to a reservation or to a house account.
     *
     * @summary postItem
     */
    postitem(body?: types.PostitemFormDataParam): Promise<FetchResponse<200, types.PostitemResponse200>>;
    /**
     * Adds single, or multiple, custom items and their associated payments to a Reservation or
     * House Account as a single transaction.
     *
     * @summary postCustomItem
     */
    postcustomitem(body?: types.PostcustomitemFormDataParam): Promise<FetchResponse<200, types.PostcustomitemResponse200>>;
    /**
     * Append single, or multiple, custom items and their associated payments to a existing one
     * in a Reservation.
     *
     * @summary appendCustomItem
     */
    postAppendcustomitem(body?: types.PostAppendcustomitemFormDataParam): Promise<FetchResponse<200, types.PostAppendcustomitemResponse200>>;
    /**
     * Voids the itemID transaction on the specified Reservation ID, House Account ID, or
     * Group. If payments were sent in calls
     * [postItem](https://developers.cloudbeds.com/reference/post_postitem) or
     * [postCustomItem](https://developers.cloudbeds.com/reference/post_postcustomitem), they
     * will be deleted too.
     *
     * @summary postVoidItem
     */
    postvoiditem(body?: types.PostvoiditemFormDataParam): Promise<FetchResponse<200, types.PostvoiditemResponse200>>;
    /**
     * This efficient method allows you to retrieve the collection of packages associated with
     * a property. Packages here define a group of features that a property has the ability to
     * utilize or access. By invoking this API method, developers will get a comprehensive view
     * of the feature sets that are available and active for a specific property. The
     * getPackages method boasts a seamless execution that offers essential information, vital
     * in enhancing property management, understanding available functionalities and
     * ultimately, optimizing user experience.
     *
     * @summary getPackages
     */
    getpackages(metadata?: types.GetpackagesMetadataParam): Promise<FetchResponse<200, types.GetpackagesResponse200>>;
    /**
     * Return a list of billing package names for a property
     *
     * @summary getPackageNames
     */
    getpackagenames(metadata?: types.GetpackagenamesMetadataParam): Promise<FetchResponse<200, types.GetpackagenamesResponse200>>;
    /**
     * Add a payment to a specified reservation or house account. If both Reservation ID and
     * HouseAccountID are informed, only the former is taken in consideration.
     *
     * @summary postPayment
     */
    postpayment(body?: types.PostpaymentFormDataParam): Promise<FetchResponse<200, types.PostpaymentResponse200>>;
    /**
     * Add a Custom Payment Method to a property. This call does not allow to add Payment
     * Methods: credit cards, bank transfer or Pay Pal.
     *
     * @summary postCustomPaymentMethod
     */
    postcustompaymentmethod(body?: types.PostcustompaymentmethodFormDataParam): Promise<FetchResponse<200, types.PostcustompaymentmethodResponse200>>;
    /**
     * Get a list of active methods for a property, or list of properties
     *
     * @summary getPaymentMethods
     */
    getpaymentmethods(metadata?: types.GetpaymentmethodsMetadataParam): Promise<FetchResponse<200, types.GetpaymentmethodsResponse200>>;
    /**
     * Lists the payment capabilities of a given property
     *
     * @summary getPaymentsCapabilities
     */
    getpaymentscapabilities(metadata?: types.GetpaymentscapabilitiesMetadataParam): Promise<FetchResponse<200, types.GetpaymentscapabilitiesResponse200>>;
    /**
     * Voids a payment (using paymentID) to a specified reservation or house account.
     *
     * @summary postVoidPayment
     */
    postvoidpayment(body?: types.PostvoidpaymentFormDataParam): Promise<FetchResponse<200, types.PostvoidpaymentResponse200>>;
    /**
     * Use a payment method to process a payment on a reservation, group profile, accounts
     * receivable ledger, or house account.
     *
     * @summary postCharge
     */
    postcharge(body?: types.PostchargeFormDataParam): Promise<FetchResponse<200, types.PostchargeResponse200>>;
    /**
     * Returns the rate of the room type selected, based on the provided parameters
     *
     * @summary postCreditCard
     */
    postcreditcard(body?: types.PostcreditcardFormDataParam): Promise<FetchResponse<200, types.PostcreditcardResponse200>>;
    /**
     * Returns the rate of the room type selected, based on the provided parameters
     *
     * @summary getRate
     */
    getrate(metadata: types.GetrateMetadataParam): Promise<FetchResponse<200, types.GetrateResponse200>>;
    /**
     * Returns a list of Rate Jobs. Rate jobs are only returned within 7 days of creation,
     * after 7 days they will not be returned in the response. Requests which do not provide a
     * jobReferenceID will be filtered by the client ID of the request's token.
     *
     * @summary getRateJobs
     */
    getratejobs(metadata?: types.GetratejobsMetadataParam): Promise<FetchResponse<200, types.GetratejobsResponse200>>;
    /**
     * Returns the rates of the room type or promo code selected, based on the provided
     * parameters. If no parameters are provided, then the method will return all publicly
     * available rate plans. ### Group account support
     *
     * @summary getRatePlans
     */
    getrateplans(metadata: types.GetrateplansMetadataParam): Promise<FetchResponse<200, types.GetrateplansResponse200>>;
    /**
     * Update the rate of the room based on rateID selected, based on the provided parameters.
     * You can make multiple rate updates in a single API call. Providing a startDate and/or
     * endDate will update rates only within the interval provided. Only non derived rates can
     * be updated, requests to update a derived rate will return an error. This endpoint
     * performs updates asynchronously,  rate updates are added to a queue and the endpoint
     * returns a job reference ID. This job reference ID can be used to track job status
     * notifications or to look up details of the update once it is completed. The API is
     * limited to 30 interval per update, sending more than 30 will return an error.
     *
     * @summary patchRate
     */
    postPatchrate(body?: types.PostPatchrateFormDataParam): Promise<FetchResponse<200, types.PostPatchrateResponse200>>;
    /**
     * Update the rate of the room based on rateID selected, based on the provided parameters.
     * You can make multiple rate updates in a single API call. Providing a startDate and/or
     * endDate will update rates only within the interval provided. Only non derived rates can
     * be updated, requests to update a derived rate will return an error. This endpoint
     * performs updates asynchronously,  rate updates are added to a queue and the endpoint
     * returns a job reference ID. This job reference ID can be used to track job status
     * notifications or to look up details of the update once it is completed. The API is
     * limited to 30 interval per update, sending more than 30 will return an error.
     *
     * @summary putRate
     */
    postPutrate(body?: types.PostPutrateFormDataParam): Promise<FetchResponse<200, types.PostPutrateResponse200>>;
    /**
     * Returns information on a booking specified by the reservationID parameter
     *
     * @summary getReservation
     */
    getreservation(metadata: types.GetreservationMetadataParam): Promise<FetchResponse<200, types.GetreservationResponse200>>;
    /**
     * Adds a reservation to the selected property
     *
     * @summary postReservation
     */
    postreservation(body?: types.PostreservationFormDataParam): Promise<FetchResponse<200, types.PostreservationResponse200>>;
    /**
     * Returns a list of reservations that matched the filters criteria.<br /> Please note that
     * some reservations modification may not be reflected in this timestamp. ### Group account
     * support
     *
     * @summary getReservations
     */
    getreservations(metadata?: types.GetreservationsMetadataParam): Promise<FetchResponse<200, types.GetreservationsResponse200>>;
    /**
     * Returns a list of reservations with added information regarding booked rates and
     * sources. The results are limited to 2 years in the past unless resutsFrom parameter is
     * set to another date.<br /> Please note that some reservations modification may not be
     * reflected in this timestamp.
     *
     * @summary getReservationsWithRateDetails
     */
    getreservationswithratedetails(metadata?: types.GetreservationswithratedetailsMetadataParam): Promise<FetchResponse<200, types.GetreservationswithratedetailsResponse200>>;
    /**
     * Returns a list of rooms/reservations assigned for a selected date.
     *
     * @summary getReservationAssignments
     */
    getreservationassignments(metadata?: types.GetreservationassignmentsMetadataParam): Promise<FetchResponse<200, types.GetreservationassignmentsResponse200>>;
    /**
     * Returns information that can be used to create an invoice for the selected reservation
     *
     * @summary getReservationInvoiceInformation
     */
    getreservationinvoiceinformation(metadata: types.GetreservationinvoiceinformationMetadataParam): Promise<FetchResponse<200, types.GetreservationinvoiceinformationResponse200>>;
    /**
     * Adds a reservation note
     *
     * @summary postReservationNote
     */
    postreservationnote(body?: types.PostreservationnoteFormDataParam): Promise<FetchResponse<200, types.PostreservationnoteResponse200>>;
    /**
     * Retrieves reservation notes based on parameters
     *
     * @summary getReservationNotes
     */
    getreservationnotes(metadata: types.GetreservationnotesMetadataParam): Promise<FetchResponse<200, types.GetreservationnotesResponse200>>;
    /**
     * Updates an existing reservation note.
     *
     * @summary putReservationNote
     */
    putreservationnote(body?: types.PutreservationnoteFormDataParam): Promise<FetchResponse<200, types.PutreservationnoteResponse200>>;
    /**
     * Archives an existing reservation note.
     *
     * @summary deleteReservationNote
     */
    deletereservationnote(metadata: types.DeletereservationnoteMetadataParam): Promise<FetchResponse<200, types.DeletereservationnoteResponse200>>;
    /**
     * Attaches a document to a reservation
     *
     * @summary postReservationDocument
     */
    postreservationdocument(body?: types.PostreservationdocumentFormDataParam): Promise<FetchResponse<200, types.PostreservationdocumentResponse200>>;
    /**
     * Updates a reservation, such as custom fields, estimated arrival time, room configuration
     * and reservation status.
     *
     * @summary putReservation
     */
    putreservation(body?: types.PutreservationFormDataParam): Promise<FetchResponse<200, types.PutreservationResponse200>>;
    /**
     * Gets available property sources
     *
     * @summary getSources
     */
    getsources(metadata?: types.GetsourcesMetadataParam): Promise<FetchResponse<200, types.GetsourcesResponse200>>;
    /**
     * Get applicable fees and tax to a booking. This is meant to be used on checkout to
     * display to the guest.
     *
     * @summary getRoomsFeesAndTaxes
     */
    getroomsfeesandtaxes(metadata: types.GetroomsfeesandtaxesMetadataParam): Promise<FetchResponse<200, types.GetroomsfeesandtaxesResponse200>>;
    /**
     * Assign/Reassign a room on a guest reservation
     *
     * @summary postRoomAssign
     */
    postroomassign(body?: types.PostroomassignFormDataParam): Promise<FetchResponse<200, types.PostroomassignResponse200>>;
    /**
     * Check-in a room already assigned for a guest
     *
     * @summary postRoomCheckIn
     */
    postroomcheckin(body?: types.PostroomcheckinFormDataParam): Promise<FetchResponse<200, types.PostroomcheckinResponse200>>;
    /**
     * Check-out a room already assigned for a guest. If all rooms are checked out, the
     * reservation status will update accordingly to "Checked Out" as well.
     *
     * @summary postRoomCheckOut
     */
    postroomcheckout(body?: types.PostroomcheckoutFormDataParam): Promise<FetchResponse<200, types.PostroomcheckoutResponse200>>;
    /**
     * Returns information about particular room in reservation by its subReservationID
     *
     * @summary getReservationRoomDetails
     */
    getreservationroomdetails(metadata: types.GetreservationroomdetailsMetadataParam): Promise<FetchResponse<200, types.GetreservationroomdetailsResponse200>>;
    /**
     * Adds a room block to the selected property.
     *
     * @summary postRoomBlock
     */
    postroomblock(body?: types.PostroomblockFormDataParam): Promise<FetchResponse<200, types.PostroomblockResponse200>>;
    /**
     * Returns a list of all room blocks considering the informed parameters.
     *
     * @summary getRoomBlocks
     */
    getroomblocks(metadata?: types.GetroomblocksMetadataParam): Promise<FetchResponse<200, types.GetroomblocksResponse200>>;
    /**
     * Updates a room block.
     *
     * @summary putRoomBlock
     */
    putroomblock(body?: types.PutroomblockFormDataParam): Promise<FetchResponse<200, types.PutroomblockResponse200>>;
    /**
     * Deletes a room block
     *
     * @summary deleteRoomBlock
     */
    deleteroomblock(metadata: types.DeleteroomblockMetadataParam): Promise<FetchResponse<200, types.DeleteroomblockResponse200>>;
    /**
     * Returns a list of room types filtered by the selected parameters ### Group account
     * support
     *
     * @summary getRoomTypes
     */
    getroomtypes(metadata?: types.GetroomtypesMetadataParam): Promise<FetchResponse<200, types.GetroomtypesResponse200>>;
    /**
     * Returns a list of room types with availability considering the informed parameters ###
     * Group account support
     *
     * @summary getAvailableRoomTypes
     */
    getavailableroomtypes(metadata: types.GetavailableroomtypesMetadataParam): Promise<FetchResponse<200, types.GetavailableroomtypesResponse200>>;
    /**
     * Returns a list of all rooms considering the informed parameters. If Check-in/out dates
     * are sent, only unassigned rooms are returned. ### Group account support
     *
     * @summary getRooms
     */
    getrooms(metadata?: types.GetroomsMetadataParam): Promise<FetchResponse<200, types.GetroomsResponse200>>;
    /**
     * Returns a list of unassigned rooms in the property. Call is alias of
     * [getRooms](#api-Room-getRooms). Please check its documentation for parameters, response
     * and example. ### Group account support
     *
     * @summary getRoomsUnassigned
     */
    getroomsunassigned(metadata?: types.GetroomsunassignedMetadataParam): Promise<FetchResponse<200, types.GetroomsunassignedResponse200>>;
    /**
     * Returns the taxes and fees set for the property. Read the [Rate-Based tax (Dynamic Tax)
     * guide](https://myfrontdesk.cloudbeds.com/hc/en-us/articles/360014103514-rate-based-tax-dynamic-tax)
     * to understand its usage.
     *
     * @summary getTaxesAndFees
     */
    gettaxesandfees(metadata?: types.GettaxesandfeesMetadataParam): Promise<FetchResponse<200, types.GettaxesandfeesResponse200>>;
    /**
     * Returns information on the properties' users ### Group account support
     *
     * @summary getUsers
     */
    getusers(metadata?: types.GetusersMetadataParam): Promise<FetchResponse<200, types.GetusersResponse200>>;
}
declare const createSDK: SDK;
export default createSDK;
