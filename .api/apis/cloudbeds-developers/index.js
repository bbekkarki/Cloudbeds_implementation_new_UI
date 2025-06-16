import Oas from 'oas';
import APICore from 'api/dist/core';
import definition from './openapi.json';
class SDK {
    constructor() {
        this.spec = Oas.init(definition);
        this.core = new APICore(this.spec, 'cloudbeds-developers/v1.3 (api/6.1.3)');
    }
    /**
     * Optionally configure various options that the SDK allows.
     *
     * @param config Object of supported SDK options and toggles.
     * @param config.timeout Override the default `fetch` request timeout of 30 seconds. This number
     * should be represented in milliseconds.
     */
    config(config) {
        this.core.setConfig(config);
    }
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
    auth(...values) {
        this.core.setAuth(...values);
        return this;
    }
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
    server(url, variables = {}) {
        this.core.setServer(url, variables);
    }
    /**
     * In the context of properties being distributed across multiple localizations, this
     * endpoint serves to retrieve the precise location of the property associated with the
     * provided access token. Further information can be found in the [Authentication
     * guide](https://integrations.cloudbeds.com/hc/en-us/sections/14731510501915-Authentication).
     *
     * @summary metadata
     */
    getOauthMetadata() {
        return this.core.fetch('/oauth/metadata', 'get');
    }
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
    postAccess_token(body) {
        return this.core.fetch('/access_token', 'post', body);
    }
    /**
     * Returns information on user who authorized connection
     *
     * @summary userinfo
     */
    getUserinfo(metadata) {
        return this.core.fetch('/userinfo', 'get', metadata);
    }
    /**
     * Voids the AdjustmentID transaction on the specified reservationID
     *
     * @summary deleteAdjustment
     */
    deleteadjustment(metadata) {
        return this.core.fetch('/deleteAdjustment', 'delete', metadata);
    }
    /**
     * Adds an adjustment to a reservation
     *
     * @summary postAdjustment
     */
    postadjustment(body) {
        return this.core.fetch('/postAdjustment', 'post', body);
    }
    /**
     * Retreive allotment blocks @apiQuery {Integer} propertyID Property ID
     *
     * @summary createAllotmentBlock
     */
    postCreateallotmentblock(body) {
        return this.core.fetch('/createAllotmentBlock', 'post', body);
    }
    /**
     * Delete allotment blocks
     *
     * @summary deleteAllotmentBlock
     */
    postDeleteallotmentblock(body) {
        return this.core.fetch('/deleteAllotmentBlock', 'post', body);
    }
    /**
     * Retrieve allotment blocks
     *
     * @summary getAllotmentBlocks
     */
    getallotmentblocks(metadata) {
        return this.core.fetch('/getAllotmentBlocks', 'get', metadata);
    }
    /**
     * Update an allotment block @apiQuery {Integer} propertyID Property ID
     *
     * @summary updateAllotmentBlock
     */
    postUpdateallotmentblock(body) {
        return this.core.fetch('/updateAllotmentBlock', 'post', body);
    }
    /**
     * Add a note to an allotment block
     *
     * @summary createAllotmentBlockNotes
     */
    postCreateallotmentblocknotes(body) {
        return this.core.fetch('/createAllotmentBlockNotes', 'post', body);
    }
    /**
     * List notes added to an allotment block
     *
     * @summary listAllotmentBlockNotes
     */
    getListallotmentblocknotes(metadata) {
        return this.core.fetch('/listAllotmentBlockNotes', 'get', metadata);
    }
    /**
     * Update a note on an allotment block
     *
     * @summary updateAllotmentBlockNotes
     */
    postUpdateallotmentblocknotes(body) {
        return this.core.fetch('/updateAllotmentBlockNotes', 'post', body);
    }
    /**
     * deleteAppPropertySettings
     *
     */
    postDeleteapppropertysettings(body) {
        return this.core.fetch('/deleteAppPropertySettings', 'post', body);
    }
    /**
     * Returns the app property settings
     *
     * @summary getAppPropertySettings
     */
    getapppropertysettings(metadata) {
        return this.core.fetch('/getAppPropertySettings', 'get', metadata);
    }
    /**
     * postAppPropertySettings
     *
     */
    postapppropertysettings(body) {
        return this.core.fetch('/postAppPropertySettings', 'post', body);
    }
    /**
     * putAppPropertySettings
     *
     */
    postPutapppropertysettings(body) {
        return this.core.fetch('/putAppPropertySettings', 'post', body);
    }
    /**
     * Get currency settings
     *
     * @summary getCurrencySettings
     */
    getcurrencysettings(metadata) {
        return this.core.fetch('/getCurrencySettings', 'get', metadata);
    }
    /**
     * Gets custom fields list<br /> ¹ data.displayed = "booking" - Display this field to
     * guests on the booking engine.<br /> ¹ data.displayed = "reservation" - Add this field to
     * the reservation folio for use by staff.<br /> ¹ data.displayed = "card" - Make this
     * field available for registration cards.<br />
     *
     * @summary getCustomFields
     */
    getcustomfields(metadata) {
        return this.core.fetch('/getCustomFields', 'get', metadata);
    }
    /**
     * Sets custom fields. The call should only be made once to add the field to the system.
     *
     * @summary postCustomField
     */
    postcustomfield(body) {
        return this.core.fetch('/postCustomField', 'post', body);
    }
    /**
     * Returns basic information about the current state of the hotel
     *
     * @summary getDashboard
     */
    getdashboard(metadata) {
        return this.core.fetch('/getDashboard', 'get', metadata);
    }
    /**
     * Returns a list of all existing email templates. This call is only available for
     * third-party integration partners, and not for property client IDs.
     *
     * @summary getEmailTemplates
     */
    getemailtemplates(metadata) {
        return this.core.fetch('/getEmailTemplates', 'get', metadata);
    }
    /**
     * Creates a new email template. See the full list of available language parameters <a
     * href="https://integrations.cloudbeds.com/hc/en-us/articles/360007144993-FAQ#methods-and-parameters">here</a>.
     * This call is only available for third-party integration partners, and not for property
     * client IDs.
     *
     * @summary postEmailTemplate
     */
    postemailtemplate(body) {
        return this.core.fetch('/postEmailTemplate', 'post', body);
    }
    /**
     * Returns a list of all existing email scheduling. This call is only available for
     * third-party integration partners, and not for property client IDs.
     *
     * @summary getEmailSchedule
     */
    getemailschedule(metadata) {
        return this.core.fetch('/getEmailSchedule', 'get', metadata);
    }
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
    postemailschedule(body) {
        return this.core.fetch('/postEmailSchedule', 'post', body);
    }
    /**
     * Returns group notes
     *
     * @summary getGroupNotes
     */
    getgroupnotes(metadata) {
        return this.core.fetch('/getGroupNotes', 'get', metadata);
    }
    /**
     * Returns the groups for a property
     *
     * @summary getGroups
     */
    getgroups(metadata) {
        return this.core.fetch('/getGroups', 'get', metadata);
    }
    /**
     * Updates an existing group with information provided. At least one information field is
     * required for this call.
     *
     * @summary patchGroup
     */
    postPatchgroup(body) {
        return this.core.fetch('/patchGroup', 'post', body);
    }
    /**
     * Adds a group note
     *
     * @summary postGroupNote
     */
    postgroupnote(body) {
        return this.core.fetch('/postGroupNote', 'post', body);
    }
    /**
     * Adds a group to the property. Please note that the default setting for 'Route to Group
     * Folio' will be 'No,' and the 'Reservation Folio Configuration' will be set as the
     * default folio configuration. You can edit these settings through the user interface
     * (UI).
     *
     * @summary putGroup
     */
    postPutgroup(body) {
        return this.core.fetch('/putGroup', 'post', body);
    }
    /**
     * Returns information on a guest specified by the Reservation ID parameter
     *
     * @summary getGuest
     */
    getguest(metadata) {
        return this.core.fetch('/getGuest', 'get', metadata);
    }
    /**
     * Returns a list of guests, ordered by modification date ### Group account support
     *
     * @summary getGuestList
     */
    getguestlist(metadata) {
        return this.core.fetch('/getGuestList', 'get', metadata);
    }
    /**
     * Returns a list of guests based on their modification date. Note that when a guest checks
     * in or checks out of a room, their record is modified at that time. If no date range is
     * passed, only the records for the current day are returned. Also note that if the guest
     * is assigned to multiple rooms, it will result in multiple records. ### Group account
     * support
     *
     * @summary getGuestsModified
     */
    getguestsmodified(metadata) {
        return this.core.fetch('/getGuestsModified', 'get', metadata);
    }
    /**
     * Returns a list of guests in the current status (Not Checked In, In House, Checked Out or
     * Cancelled), sorted by modification date. If no date range is passed, it returns all
     * guests with the selected status. ### Group account support
     *
     * @summary getGuestsByStatus
     */
    getguestsbystatus(metadata) {
        return this.core.fetch('/getGuestsByStatus', 'get', metadata);
    }
    /**
     * Returns a list of guests matching the selected parameters ### Group account support
     *
     * @summary getGuestsByFilter
     */
    getguestsbyfilter(metadata) {
        return this.core.fetch('/getGuestsByFilter', 'get', metadata);
    }
    /**
     * Adds a guest note
     *
     * @summary postGuestNote
     */
    postguestnote(body) {
        return this.core.fetch('/postGuestNote', 'post', body);
    }
    /**
     * Retrieves a guest notes
     *
     * @summary getGuestNotes
     */
    getguestnotes(metadata) {
        return this.core.fetch('/getGuestNotes', 'get', metadata);
    }
    /**
     * Updates an existing guest note.
     *
     * @summary putGuestNote
     */
    putguestnote(body) {
        return this.core.fetch('/putGuestNote', 'put', body);
    }
    /**
     * Archives an existing guest note.
     *
     * @summary deleteGuestNote
     */
    deleteguestnote(metadata) {
        return this.core.fetch('/deleteGuestNote', 'delete', metadata);
    }
    /**
     * Updates an existing guest with information provided. At least one information field is
     * required for this call.
     *
     * @summary putGuest
     */
    putguest(body) {
        return this.core.fetch('/putGuest', 'put', body);
    }
    /**
     * Attaches a document to a guest
     *
     * @summary postGuestDocument
     */
    postguestdocument(body) {
        return this.core.fetch('/postGuestDocument', 'post', body);
    }
    /**
     * Adds a guest to reservation as an additional guest.
     *
     * @summary postGuest
     */
    postguest(body) {
        return this.core.fetch('/postGuest', 'post', body);
    }
    /**
     * Assigns guest(s) to a room in a reservation and adds these guests as additional guests.
     *
     * @summary postGuestsToRoom
     */
    postgueststoroom(body) {
        return this.core.fetch('/postGuestsToRoom', 'post', body);
    }
    /**
     * Attaches a photo to a guest
     *
     * @summary postGuestPhoto
     */
    postguestphoto(body) {
        return this.core.fetch('/postGuestPhoto', 'post', body);
    }
    /**
     * Returns a list of hotels, filtered by the parameters passed ### Group account support
     *
     * @summary getHotels
     */
    gethotels(metadata) {
        return this.core.fetch('/getHotels', 'get', metadata);
    }
    /**
     * Returns the details of a specific hotel, identified by "propertyID"
     *
     * @summary getHotelDetails
     */
    gethoteldetails(metadata) {
        return this.core.fetch('/getHotelDetails', 'get', metadata);
    }
    /**
     * Attaches a file to a hotel
     *
     * @summary postFile
     */
    postfile(body) {
        return this.core.fetch('/postFile', 'post', body);
    }
    /**
     * Returns a list of files attached to a hotel or group profile, ordered by creation date
     *
     * @summary getFiles
     */
    getfiles(metadata) {
        return this.core.fetch('/getFiles', 'get', metadata);
    }
    /**
     * Pulls list of active house accounts
     *
     * @summary getHouseAccountList
     */
    gethouseaccountlist(metadata) {
        return this.core.fetch('/getHouseAccountList', 'get', metadata);
    }
    /**
     * Add a new House Account
     *
     * @summary postNewHouseAccount
     */
    postnewhouseaccount(body) {
        return this.core.fetch('/postNewHouseAccount', 'post', body);
    }
    /**
     * Change specific house account to either open or closed.
     *
     * @summary putHouseAccountStatus
     */
    puthouseaccountstatus(body) {
        return this.core.fetch('/putHouseAccountStatus', 'put', body);
    }
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
    gethousekeepingstatus(metadata) {
        return this.core.fetch('/getHousekeepingStatus', 'get', metadata);
    }
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
    posthousekeepingstatus(body) {
        return this.core.fetch('/postHousekeepingStatus', 'post', body);
    }
    /**
     * Add New Housekeeper
     *
     * @summary postHousekeeper
     */
    posthousekeeper(body) {
        return this.core.fetch('/postHousekeeper', 'post', body);
    }
    /**
     * Edit Housekeeper Details
     *
     * @summary putHousekeeper
     */
    puthousekeeper(body) {
        return this.core.fetch('/putHousekeeper', 'put', body);
    }
    /**
     * Returns a list of housekeepers ### Group account support
     *
     * @summary getHousekeepers
     */
    gethousekeepers(metadata) {
        return this.core.fetch('/getHousekeepers', 'get', metadata);
    }
    /**
     * Assign rooms (single or multiple) to an existing housekeeper
     *
     * @summary postHousekeepingAssignment
     */
    posthousekeepingassignment(body) {
        return this.core.fetch('/postHousekeepingAssignment', 'post', body);
    }
    /**
     * Get the current app integration state for a property.<br /> This call is only available
     * for third-party integration partners, and not for property client IDs. Read the
     * [Connecting/Disconnecting Apps
     * guide](https://integrations.cloudbeds.com/hc/en-us/articles/360007613213-Connecting-Disconnecting-Apps)
     * to further understand the use cases.
     *
     * @summary getAppState
     */
    getappstate(metadata) {
        return this.core.fetch('/getAppState', 'get', metadata);
    }
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
    postappstate(body) {
        return this.core.fetch('/postAppState', 'post', body);
    }
    /**
     * Add a Government Receipt to a Reservation or House Account
     *
     * @summary postGovernmentReceipt
     */
    postgovernmentreceipt(body) {
        return this.core.fetch('/postGovernmentReceipt', 'post', body);
    }
    /**
     * Get the current app settings for a property.<br />
     *
     * @summary getAppSettings
     */
    getappsettings(metadata) {
        return this.core.fetch('/getAppSettings', 'get', metadata);
    }
    /**
     * Submit the error received by the hybrid integration from the partner to the MFD
     *
     * @summary postAppError
     */
    postapperror(body) {
        return this.core.fetch('/postAppError', 'post', body);
    }
    /**
     * Subscribe a webhook for a specified event. Read the [Webhooks
     * guide](https://integrations.cloudbeds.com/hc/en-us/articles/360007612553-Webhooks) to
     * see available objects, actions, payload info and more.
     *
     * @summary postWebhook
     */
    postwebhook(body) {
        return this.core.fetch('/postWebhook', 'post', body);
    }
    /**
     * Remove subscription for webhook. Read the [Webhooks
     * guide](https://integrations.cloudbeds.com/hc/en-us/articles/360007612553-Webhooks) to
     * see available objects, actions, payload info and more. ### Group account support
     *
     * @summary deleteWebhook
     */
    deletewebhook(metadata) {
        return this.core.fetch('/deleteWebhook', 'delete', metadata);
    }
    /**
     * List webhooks for which the API client is subscribed to.
     *
     * @summary getWebhooks
     */
    getwebhooks(metadata) {
        return this.core.fetch('/getWebhooks', 'get', metadata);
    }
    /**
     * Returns invoice data. This call is only available for third-party integration partners,
     * and not for property client IDs.
     *
     * @summary getInvoice
     */
    getinvoice(metadata) {
        return this.core.fetch('/getInvoice', 'get', metadata);
    }
    /**
     * Update invoice state. This call is only available for third-party integration partners,
     * and not for property client IDs.
     *
     * @summary patchInvoice
     */
    postPatchinvoice(body) {
        return this.core.fetch('/patchInvoice', 'post', body);
    }
    /**
     * Gets the details for the one itemID<br /> <sup>1</sup> only if data.stockInventory =
     * true<br> <sup>2</sup> Taxes, fees and totals will show up only if an item has assigned
     * tax or fee.<br>
     *
     * @summary getItem
     */
    getitem(metadata) {
        return this.core.fetch('/getItem', 'get', metadata);
    }
    /**
     * Updates an item with information provided<br /> ¹ only if item.stockInventory = true<br
     * />
     *
     * @summary putItemToInventory
     */
    putitemtoinventory(body) {
        return this.core.fetch('/putItemToInventory', 'put', body);
    }
    /**
     * Gets all the items and their prices the hotel has created in myfrontdesk<br>
     * <sup>1</sup> only if data.stockInventory = true<br> <sup>2</sup> Taxes, fees and totals
     * will show up only if an item has assigned tax or fee.<br>
     *
     * @summary getItems
     */
    getitems(metadata) {
        return this.core.fetch('/getItems', 'get', metadata);
    }
    /**
     * Gets the item category list
     *
     * @summary getItemCategories
     */
    getitemcategories(metadata) {
        return this.core.fetch('/getItemCategories', 'get', metadata);
    }
    /**
     * Adds new items category
     *
     * @summary postItemCategory
     */
    postitemcategory(body) {
        return this.core.fetch('/postItemCategory', 'post', body);
    }
    /**
     * Adds new items batch<br /> ¹ only if item.stockInventory = true<br />
     *
     * @summary postItemsToInventory
     */
    postitemstoinventory(body) {
        return this.core.fetch('/postItemsToInventory', 'post', body);
    }
    /**
     * Adds an item either to a reservation or to a house account.
     *
     * @summary postItem
     */
    postitem(body) {
        return this.core.fetch('/postItem', 'post', body);
    }
    /**
     * Adds single, or multiple, custom items and their associated payments to a Reservation or
     * House Account as a single transaction.
     *
     * @summary postCustomItem
     */
    postcustomitem(body) {
        return this.core.fetch('/postCustomItem', 'post', body);
    }
    /**
     * Append single, or multiple, custom items and their associated payments to a existing one
     * in a Reservation.
     *
     * @summary appendCustomItem
     */
    postAppendcustomitem(body) {
        return this.core.fetch('/appendCustomItem', 'post', body);
    }
    /**
     * Voids the itemID transaction on the specified Reservation ID, House Account ID, or
     * Group. If payments were sent in calls
     * [postItem](https://developers.cloudbeds.com/reference/post_postitem) or
     * [postCustomItem](https://developers.cloudbeds.com/reference/post_postcustomitem), they
     * will be deleted too.
     *
     * @summary postVoidItem
     */
    postvoiditem(body) {
        return this.core.fetch('/postVoidItem', 'post', body);
    }
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
    getpackages(metadata) {
        return this.core.fetch('/getPackages', 'get', metadata);
    }
    /**
     * Return a list of billing package names for a property
     *
     * @summary getPackageNames
     */
    getpackagenames(metadata) {
        return this.core.fetch('/getPackageNames', 'get', metadata);
    }
    /**
     * Add a payment to a specified reservation or house account. If both Reservation ID and
     * HouseAccountID are informed, only the former is taken in consideration.
     *
     * @summary postPayment
     */
    postpayment(body) {
        return this.core.fetch('/postPayment', 'post', body);
    }
    /**
     * Add a Custom Payment Method to a property. This call does not allow to add Payment
     * Methods: credit cards, bank transfer or Pay Pal.
     *
     * @summary postCustomPaymentMethod
     */
    postcustompaymentmethod(body) {
        return this.core.fetch('/postCustomPaymentMethod', 'post', body);
    }
    /**
     * Get a list of active methods for a property, or list of properties
     *
     * @summary getPaymentMethods
     */
    getpaymentmethods(metadata) {
        return this.core.fetch('/getPaymentMethods', 'get', metadata);
    }
    /**
     * Lists the payment capabilities of a given property
     *
     * @summary getPaymentsCapabilities
     */
    getpaymentscapabilities(metadata) {
        return this.core.fetch('/getPaymentsCapabilities', 'get', metadata);
    }
    /**
     * Voids a payment (using paymentID) to a specified reservation or house account.
     *
     * @summary postVoidPayment
     */
    postvoidpayment(body) {
        return this.core.fetch('/postVoidPayment', 'post', body);
    }
    /**
     * Use a payment method to process a payment on a reservation, group profile, accounts
     * receivable ledger, or house account.
     *
     * @summary postCharge
     */
    postcharge(body) {
        return this.core.fetch('/postCharge', 'post', body);
    }
    /**
     * Returns the rate of the room type selected, based on the provided parameters
     *
     * @summary postCreditCard
     */
    postcreditcard(body) {
        return this.core.fetch('/postCreditCard', 'post', body);
    }
    /**
     * Returns the rate of the room type selected, based on the provided parameters
     *
     * @summary getRate
     */
    getrate(metadata) {
        return this.core.fetch('/getRate', 'get', metadata);
    }
    /**
     * Returns a list of Rate Jobs. Rate jobs are only returned within 7 days of creation,
     * after 7 days they will not be returned in the response. Requests which do not provide a
     * jobReferenceID will be filtered by the client ID of the request's token.
     *
     * @summary getRateJobs
     */
    getratejobs(metadata) {
        return this.core.fetch('/getRateJobs', 'get', metadata);
    }
    /**
     * Returns the rates of the room type or promo code selected, based on the provided
     * parameters. If no parameters are provided, then the method will return all publicly
     * available rate plans. ### Group account support
     *
     * @summary getRatePlans
     */
    getrateplans(metadata) {
        return this.core.fetch('/getRatePlans', 'get', metadata);
    }
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
    postPatchrate(body) {
        return this.core.fetch('/patchRate', 'post', body);
    }
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
    postPutrate(body) {
        return this.core.fetch('/putRate', 'post', body);
    }
    /**
     * Returns information on a booking specified by the reservationID parameter
     *
     * @summary getReservation
     */
    getreservation(metadata) {
        return this.core.fetch('/getReservation', 'get', metadata);
    }
    /**
     * Adds a reservation to the selected property
     *
     * @summary postReservation
     */
    postreservation(body) {
        return this.core.fetch('/postReservation', 'post', body);
    }
    /**
     * Returns a list of reservations that matched the filters criteria.<br /> Please note that
     * some reservations modification may not be reflected in this timestamp. ### Group account
     * support
     *
     * @summary getReservations
     */
    getreservations(metadata) {
        return this.core.fetch('/getReservations', 'get', metadata);
    }
    /**
     * Returns a list of reservations with added information regarding booked rates and
     * sources. The results are limited to 2 years in the past unless resutsFrom parameter is
     * set to another date.<br /> Please note that some reservations modification may not be
     * reflected in this timestamp.
     *
     * @summary getReservationsWithRateDetails
     */
    getreservationswithratedetails(metadata) {
        return this.core.fetch('/getReservationsWithRateDetails', 'get', metadata);
    }
    /**
     * Returns a list of rooms/reservations assigned for a selected date.
     *
     * @summary getReservationAssignments
     */
    getreservationassignments(metadata) {
        return this.core.fetch('/getReservationAssignments', 'get', metadata);
    }
    /**
     * Returns information that can be used to create an invoice for the selected reservation
     *
     * @summary getReservationInvoiceInformation
     */
    getreservationinvoiceinformation(metadata) {
        return this.core.fetch('/getReservationInvoiceInformation', 'get', metadata);
    }
    /**
     * Adds a reservation note
     *
     * @summary postReservationNote
     */
    postreservationnote(body) {
        return this.core.fetch('/postReservationNote', 'post', body);
    }
    /**
     * Retrieves reservation notes based on parameters
     *
     * @summary getReservationNotes
     */
    getreservationnotes(metadata) {
        return this.core.fetch('/getReservationNotes', 'get', metadata);
    }
    /**
     * Updates an existing reservation note.
     *
     * @summary putReservationNote
     */
    putreservationnote(body) {
        return this.core.fetch('/putReservationNote', 'put', body);
    }
    /**
     * Archives an existing reservation note.
     *
     * @summary deleteReservationNote
     */
    deletereservationnote(metadata) {
        return this.core.fetch('/deleteReservationNote', 'delete', metadata);
    }
    /**
     * Attaches a document to a reservation
     *
     * @summary postReservationDocument
     */
    postreservationdocument(body) {
        return this.core.fetch('/postReservationDocument', 'post', body);
    }
    /**
     * Updates a reservation, such as custom fields, estimated arrival time, room configuration
     * and reservation status.
     *
     * @summary putReservation
     */
    putreservation(body) {
        return this.core.fetch('/putReservation', 'put', body);
    }
    /**
     * Gets available property sources
     *
     * @summary getSources
     */
    getsources(metadata) {
        return this.core.fetch('/getSources', 'get', metadata);
    }
    /**
     * Get applicable fees and tax to a booking. This is meant to be used on checkout to
     * display to the guest.
     *
     * @summary getRoomsFeesAndTaxes
     */
    getroomsfeesandtaxes(metadata) {
        return this.core.fetch('/getRoomsFeesAndTaxes', 'get', metadata);
    }
    /**
     * Assign/Reassign a room on a guest reservation
     *
     * @summary postRoomAssign
     */
    postroomassign(body) {
        return this.core.fetch('/postRoomAssign', 'post', body);
    }
    /**
     * Check-in a room already assigned for a guest
     *
     * @summary postRoomCheckIn
     */
    postroomcheckin(body) {
        return this.core.fetch('/postRoomCheckIn', 'post', body);
    }
    /**
     * Check-out a room already assigned for a guest. If all rooms are checked out, the
     * reservation status will update accordingly to "Checked Out" as well.
     *
     * @summary postRoomCheckOut
     */
    postroomcheckout(body) {
        return this.core.fetch('/postRoomCheckOut', 'post', body);
    }
    /**
     * Returns information about particular room in reservation by its subReservationID
     *
     * @summary getReservationRoomDetails
     */
    getreservationroomdetails(metadata) {
        return this.core.fetch('/getReservationRoomDetails', 'get', metadata);
    }
    /**
     * Adds a room block to the selected property.
     *
     * @summary postRoomBlock
     */
    postroomblock(body) {
        return this.core.fetch('/postRoomBlock', 'post', body);
    }
    /**
     * Returns a list of all room blocks considering the informed parameters.
     *
     * @summary getRoomBlocks
     */
    getroomblocks(metadata) {
        return this.core.fetch('/getRoomBlocks', 'get', metadata);
    }
    /**
     * Updates a room block.
     *
     * @summary putRoomBlock
     */
    putroomblock(body) {
        return this.core.fetch('/putRoomBlock', 'put', body);
    }
    /**
     * Deletes a room block
     *
     * @summary deleteRoomBlock
     */
    deleteroomblock(metadata) {
        return this.core.fetch('/deleteRoomBlock', 'delete', metadata);
    }
    /**
     * Returns a list of room types filtered by the selected parameters ### Group account
     * support
     *
     * @summary getRoomTypes
     */
    getroomtypes(metadata) {
        return this.core.fetch('/getRoomTypes', 'get', metadata);
    }
    /**
     * Returns a list of room types with availability considering the informed parameters ###
     * Group account support
     *
     * @summary getAvailableRoomTypes
     */
    getavailableroomtypes(metadata) {
        return this.core.fetch('/getAvailableRoomTypes', 'get', metadata);
    }
    /**
     * Returns a list of all rooms considering the informed parameters. If Check-in/out dates
     * are sent, only unassigned rooms are returned. ### Group account support
     *
     * @summary getRooms
     */
    getrooms(metadata) {
        return this.core.fetch('/getRooms', 'get', metadata);
    }
    /**
     * Returns a list of unassigned rooms in the property. Call is alias of
     * [getRooms](#api-Room-getRooms). Please check its documentation for parameters, response
     * and example. ### Group account support
     *
     * @summary getRoomsUnassigned
     */
    getroomsunassigned(metadata) {
        return this.core.fetch('/getRoomsUnassigned', 'get', metadata);
    }
    /**
     * Returns the taxes and fees set for the property. Read the [Rate-Based tax (Dynamic Tax)
     * guide](https://myfrontdesk.cloudbeds.com/hc/en-us/articles/360014103514-rate-based-tax-dynamic-tax)
     * to understand its usage.
     *
     * @summary getTaxesAndFees
     */
    gettaxesandfees(metadata) {
        return this.core.fetch('/getTaxesAndFees', 'get', metadata);
    }
    /**
     * Returns information on the properties' users ### Group account support
     *
     * @summary getUsers
     */
    getusers(metadata) {
        return this.core.fetch('/getUsers', 'get', metadata);
    }
}
const createSDK = (() => { return new SDK(); })();
export default createSDK;
