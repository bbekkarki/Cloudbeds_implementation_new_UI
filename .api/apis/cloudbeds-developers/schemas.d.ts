declare const Deleteadjustment: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly propertyID: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Property ID";
                };
                readonly reservationID: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Reservation identifier";
                };
                readonly adjustmentID: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Adjustment identifier";
                };
            };
            readonly required: readonly ["reservationID", "adjustmentID"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly success: {
                    readonly description: "Returns if the request could be completed";
                    readonly type: "boolean";
                };
                readonly message: {
                    readonly description: "To be used in case any error occurs (if success = false). If success = true, it does not exist.";
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const Deleteguestnote: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly propertyID: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Property ID";
                };
                readonly guestID: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Guest ID";
                };
                readonly noteID: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Note ID";
                };
            };
            readonly required: readonly ["guestID", "noteID"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly success: {
                    readonly description: "Returns if the request could be completed";
                    readonly type: "boolean";
                };
                readonly message: {
                    readonly description: "To be used in case any error occurs (if success = false). If success = true, it does not exist.";
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const Deletereservationnote: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly propertyID: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Property ID";
                };
                readonly reservationID: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Reservation Unique Identifier";
                };
                readonly reservationNoteID: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Reservation Note ID";
                };
            };
            readonly required: readonly ["reservationID", "reservationNoteID"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly success: {
                    readonly description: "Returns if the request could be completed";
                    readonly type: "boolean";
                };
                readonly message: {
                    readonly description: "To be used in case any error occurs (if success = false). If success = true, it does not exist.";
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const Deleteroomblock: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly propertyID: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Property ID";
                };
                readonly roomBlockID: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Room block ID";
                };
            };
            readonly required: readonly ["roomBlockID"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly success: {
                    readonly description: "Returns if the request could be completed";
                    readonly type: "boolean";
                };
                readonly message: {
                    readonly description: "To be used in case any error occurs (if success = false).  If success = true, it does not exist.";
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const Deletewebhook: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly propertyIDs: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "List of property IDs, comma-separated, i.e. 37,345,89";
                };
                readonly subscriptionID: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Subscription ID";
                };
            };
            readonly required: readonly ["subscriptionID"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly success: {
                    readonly description: "Returns if the request could be completed";
                    readonly type: "boolean";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetListallotmentblocknotes: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly propertyID: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Property ID";
                };
                readonly allotmentBlockCode: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Allotment block code";
                };
                readonly status: {
                    readonly type: "string";
                    readonly enum: readonly ["all", "active", "archived"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Note status";
                };
                readonly pageNumber: {
                    readonly type: "integer";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Page";
                };
                readonly pageSize: {
                    readonly type: "integer";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Number of Items per Page (min 1, max 100)";
                };
            };
            readonly required: readonly ["propertyID", "allotmentBlockCode"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly success: {
                    readonly description: "Returns if the request could be completed";
                    readonly type: "boolean";
                };
                readonly data: {
                    readonly description: "List of notes";
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly id: {
                                readonly description: "Note ID";
                                readonly type: "string";
                            };
                            readonly message: {
                                readonly description: "Note contents";
                                readonly type: "string";
                            };
                            readonly createdBy: {
                                readonly description: "User Name";
                                readonly type: "string";
                            };
                            readonly createdAt: {
                                readonly description: "Creation datetime (format: Y-m-d H:i:s)";
                                readonly type: "string";
                                readonly format: "date-time";
                            };
                            readonly updatedAt: {
                                readonly description: "Last modification datetime (format: Y-m-d H:i:s)";
                                readonly type: "string";
                                readonly format: "date-time";
                            };
                            readonly archivedAt: {
                                readonly description: "Archival datetime (format: Y-m-d H:i:s)";
                                readonly type: "string";
                                readonly format: "date-time";
                            };
                            readonly status: {
                                readonly description: "Note status";
                                readonly type: "string";
                            };
                        };
                    };
                };
                readonly pageSize: {
                    readonly description: "Number of Notes per Page";
                    readonly type: "integer";
                };
                readonly pageNumber: {
                    readonly description: "Current page";
                    readonly type: "integer";
                };
                readonly total: {
                    readonly description: "Total number of Notes";
                    readonly type: "integer";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetOauthMetadata: {
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly success: {
                    readonly description: "True if property can be found";
                    readonly type: "string";
                };
                readonly data: {
                    readonly description: "";
                    readonly type: "object";
                    readonly properties: {
                        readonly api: {
                            readonly description: "The api details";
                            readonly type: "object";
                            readonly properties: {
                                readonly url: {
                                    readonly description: "The API URL for the given property";
                                    readonly type: "string";
                                };
                            };
                        };
                    };
                };
                readonly message: {
                    readonly description: "To be used in case any error occurs (if success = false). If success = true, it does not exist.";
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetUserinfo: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly property_id: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Specify a property ID when using role_details";
                };
                readonly role_details: {
                    readonly type: "boolean";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Specify whether to include role and acl details of the user.";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly user_id: {
                    readonly description: "ID of user";
                    readonly type: "string";
                };
                readonly first_name: {
                    readonly description: "Authorized users' first name.";
                    readonly type: "string";
                };
                readonly last_name: {
                    readonly description: "Authorized users' last name.";
                    readonly type: "string";
                };
                readonly email: {
                    readonly description: "Authorized users' email.";
                    readonly type: "string";
                };
                readonly acl: {
                    readonly description: "Authorized users' access control list.";
                    readonly type: "array";
                    readonly items: {
                        readonly type: "string";
                    };
                };
                readonly roles: {
                    readonly description: "Authorized users' role information.";
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly id: {
                                readonly description: "ID of the role.";
                                readonly type: "string";
                            };
                            readonly name: {
                                readonly description: "Name of the role.";
                                readonly type: "string";
                            };
                            readonly description: {
                                readonly description: "Description of the role.";
                                readonly type: "string";
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const Getallotmentblocks: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly propertyID: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Property ID (optional, by default all authorized properties will be included)";
                };
                readonly allotmentBlockCode: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Allotment block code";
                };
                readonly allotmentBlockName: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Allotment block name";
                };
                readonly groupCode: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "A group profile code";
                };
                readonly allotmentBlockStatus: {
                    readonly type: "string";
                    readonly enum: readonly ["definite", "tentative", "lead", "cancelled"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Allotment block status(es)";
                };
                readonly allotmentBlockType: {
                    readonly type: "string";
                    readonly enum: readonly ["aggregate", "allotment"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The type of allotment block";
                };
                readonly pageSize: {
                    readonly type: "integer";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Number of allotment blocks to return per page (min: 1, max: 100)";
                };
                readonly pageNumber: {
                    readonly type: "integer";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Which page in the results to access";
                };
                readonly startDate: {
                    readonly type: "string";
                    readonly format: "date";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Interval start date";
                };
                readonly endDate: {
                    readonly type: "string";
                    readonly format: "date";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Interval start date";
                };
            };
            readonly required: readonly ["propertyID"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly success: {
                    readonly description: "Returns if the request could be completed";
                    readonly type: "boolean";
                };
                readonly count: {
                    readonly description: "Number of allotment blocks returned";
                    readonly type: "integer";
                };
                readonly total: {
                    readonly description: "Total number of allotment blocks";
                    readonly type: "integer";
                };
                readonly data: {
                    readonly description: "Allotment Blocks";
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly propertyID: {
                                readonly description: "Property ID associated to the allotment block";
                                readonly type: "string";
                            };
                            readonly allotmentBlockCode: {
                                readonly description: "Allotment block code";
                                readonly type: "string";
                            };
                            readonly allotmentBlockStatus: {
                                readonly description: "Allotment block status";
                                readonly type: "string";
                            };
                            readonly allotmentBlockName: {
                                readonly description: "Allotment block name";
                                readonly type: "string";
                            };
                            readonly allotmentBlockId: {
                                readonly description: "Allotment block ID";
                                readonly type: "string";
                            };
                            readonly rateType: {
                                readonly description: "Rate type for the allotment block";
                                readonly type: "string";
                            };
                            readonly ratePlanId: {
                                readonly description: "Rate plan ID if applicable";
                                readonly type: "string";
                            };
                            readonly allotmentType: {
                                readonly description: "the type of allotment block";
                                readonly type: "string";
                            };
                            readonly groupId: {
                                readonly description: "Group profile ID associated to the allotment block";
                                readonly type: "string";
                            };
                            readonly groupCode: {
                                readonly description: "Group profile code associated to the allotment block";
                                readonly type: "string";
                            };
                            readonly isAutoRelease: {
                                readonly description: "If the allotment block is configured for auto-release";
                                readonly type: "boolean";
                            };
                            readonly autoRelease: {
                                readonly description: "auto-release data if applicable";
                                readonly type: "array";
                                readonly items: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly releaseType: {
                                            readonly description: "The type of auto-release\n\n`all_dates` `by_day` `by_interval`";
                                            readonly type: "string";
                                            readonly enum: readonly ["all_dates", "by_day", "by_interval"];
                                        };
                                        readonly days: {
                                            readonly description: "The number of days prior to the end of the allotment block to begin releasing dates from the allotment block";
                                            readonly type: "integer";
                                        };
                                        readonly releaseTime: {
                                            readonly description: "The hour to being the auto-release in HH:00 format, e.g. '00:00', '01:00'...";
                                            readonly type: "string";
                                        };
                                    };
                                };
                            };
                            readonly allotmentIntervals: {
                                readonly description: "array of interval data by room type";
                                readonly type: "array";
                                readonly items: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly roomTypeId: {
                                            readonly description: "Room type ID";
                                            readonly type: "string";
                                        };
                                        readonly startDate: {
                                            readonly description: "Interval start date";
                                            readonly type: "string";
                                            readonly format: "date";
                                        };
                                        readonly endDate: {
                                            readonly description: "Interval end date";
                                            readonly type: "string";
                                            readonly format: "date";
                                        };
                                        readonly availability: {
                                            readonly description: "Interval availability data by day in interval";
                                            readonly type: "array";
                                            readonly items: {
                                                readonly type: "object";
                                                readonly properties: {
                                                    readonly date: {
                                                        readonly description: "Day within interval";
                                                        readonly type: "string";
                                                        readonly format: "date";
                                                    };
                                                    readonly blockRemaining: {
                                                        readonly description: "Number of units remaining for the room type for this day";
                                                        readonly type: "integer";
                                                    };
                                                    readonly blockAllotted: {
                                                        readonly description: "Total number of units available for the room type for this day";
                                                        readonly type: "integer";
                                                    };
                                                    readonly blockConfirmed: {
                                                        readonly description: "Number of units booked for the room type for this day";
                                                        readonly type: "integer";
                                                    };
                                                    readonly rate: {
                                                        readonly description: "the price";
                                                        readonly type: "string";
                                                    };
                                                    readonly guestPricing: {
                                                        readonly description: "Guest pricing data if applicable. Note: the number of results varies here based on the occupancy settings and custom guest pricing for the room type.";
                                                        readonly type: "object";
                                                        readonly properties: {
                                                            readonly adult1: {
                                                                readonly description: "Price for adult 1";
                                                                readonly type: "string";
                                                            };
                                                            readonly adult2: {
                                                                readonly description: "Price for adult 2";
                                                                readonly type: "string";
                                                            };
                                                            readonly adult3: {
                                                                readonly description: "Price for adult 3";
                                                                readonly type: "string";
                                                            };
                                                            readonly child1: {
                                                                readonly description: "Price for child 1";
                                                                readonly type: "string";
                                                            };
                                                            readonly child2: {
                                                                readonly description: "Price for child 2";
                                                                readonly type: "string";
                                                            };
                                                            readonly child3: {
                                                                readonly description: "Price for child 3";
                                                                readonly type: "string";
                                                            };
                                                        };
                                                    };
                                                    readonly splitBlockAllotted: {
                                                        readonly description: "Number of split units available for the room type this day";
                                                        readonly type: "integer";
                                                    };
                                                    readonly splitBlockConfirmed: {
                                                        readonly description: "Number of split units blocked for the room type this day";
                                                        readonly type: "integer";
                                                    };
                                                };
                                            };
                                        };
                                        readonly restrictions: {
                                            readonly description: "Interval restrictions if applicable";
                                            readonly type: "object";
                                            readonly properties: {
                                                readonly minLos: {
                                                    readonly description: "Minimum length of stay requirement";
                                                    readonly type: "integer";
                                                };
                                                readonly maxLos: {
                                                    readonly description: "Maximum length of stay requirement";
                                                    readonly type: "integer";
                                                };
                                                readonly cutOffDays: {
                                                    readonly description: "How many days before arrival should guests be required to book";
                                                    readonly type: "integer";
                                                };
                                                readonly lastMinuteBookingDays: {
                                                    readonly description: "How many days before the arrival guests are allowed to book";
                                                    readonly type: "integer";
                                                };
                                                readonly closedToArrival: {
                                                    readonly description: "If the interval dates are closed for arrival";
                                                    readonly type: "integer";
                                                };
                                                readonly closedToDeparture: {
                                                    readonly description: "If the interval dates are closed for departure";
                                                    readonly type: "integer";
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const Getapppropertysettings: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly propertyID: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Property ID";
                };
                readonly key: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Key";
                };
            };
            readonly required: readonly ["propertyID"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly success: {
                    readonly description: "Success";
                    readonly type: "boolean";
                };
                readonly data: {
                    readonly description: "Data";
                    readonly oneOf: readonly [{
                        readonly type: "object";
                        readonly properties: {
                            readonly id: {
                                readonly description: "ID";
                                readonly type: "string";
                            };
                            readonly key: {
                                readonly description: "Key";
                                readonly type: "string";
                            };
                            readonly value: {
                                readonly description: "Value";
                                readonly type: "string";
                            };
                        };
                    }, {
                        readonly type: "array";
                        readonly items: {
                            readonly type: "object";
                            readonly properties: {
                                readonly id: {
                                    readonly description: "ID";
                                    readonly type: "string";
                                };
                                readonly key: {
                                    readonly description: "Key";
                                    readonly type: "string";
                                };
                                readonly value: {
                                    readonly description: "Value";
                                    readonly type: "string";
                                };
                            };
                        };
                    }];
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const Getappsettings: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly propertyID: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Property identifier to be queried";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly success: {
                    readonly description: "Returns if the request could be completed";
                    readonly type: "boolean";
                };
                readonly data: {
                    readonly description: "Application settings details";
                    readonly type: "object";
                    readonly properties: {
                        readonly fullRevenueSync: {
                            readonly description: "Full Revenue Sync";
                            readonly type: "boolean";
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const Getappstate: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly propertyID: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Property identifier to be queried";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly success: {
                    readonly description: "Returns if the request could be completed";
                    readonly type: "boolean";
                };
                readonly data: {
                    readonly description: "Integration state details";
                    readonly type: "object";
                    readonly properties: {
                        readonly app_state: {
                            readonly description: "Integration state\n\n`enabled` `disabled` `installing` `pending`";
                            readonly type: "string";
                            readonly enum: readonly ["enabled", "disabled", "installing", "pending"];
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const Getavailableroomtypes: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly propertyIDs: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Property ID list, comma-separated, i.e. 37,345,89";
                };
                readonly startDate: {
                    readonly type: "string";
                    readonly format: "date";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Check-In date.";
                };
                readonly endDate: {
                    readonly type: "string";
                    readonly format: "date";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Check-Out date.";
                };
                readonly rooms: {
                    readonly type: "integer";
                    readonly default: 1;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Number of rooms.";
                };
                readonly adults: {
                    readonly type: "integer";
                    readonly default: 1;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Number of adults.";
                };
                readonly children: {
                    readonly type: "integer";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Number of children.";
                };
                readonly promoCode: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Promotional code";
                };
                readonly detailedRates: {
                    readonly type: "boolean";
                    readonly default: false;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "If detailed rates are expected";
                };
                readonly sort: {
                    readonly type: "string";
                    readonly enum: readonly ["room_name", "hotel_name", "room_price", "hotel_stars"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Sort parameter";
                };
                readonly order: {
                    readonly type: "string";
                    readonly enum: readonly ["asc", "desc"];
                    readonly default: "asc";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly minRate: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Minimum daily rate. Used to filter results";
                };
                readonly maxRate: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Maximum daily rate. Used to filter results";
                };
                readonly pageNumber: {
                    readonly type: "integer";
                    readonly default: 1;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Page number";
                };
                readonly pageSize: {
                    readonly type: "integer";
                    readonly default: 20;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Page size";
                };
            };
            readonly required: readonly ["startDate", "endDate", "rooms", "adults", "children"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly success: {
                    readonly description: "Returns if the request could be completed";
                    readonly type: "boolean";
                };
                readonly data: {
                    readonly description: "Room Types details";
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly propertyID: {
                                readonly description: "Property ID";
                                readonly type: "string";
                            };
                            readonly propertyCurrency: {
                                readonly description: "Currency used by the property";
                                readonly type: "array";
                                readonly items: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly currencyCode: {
                                            readonly description: "Currency identifier code";
                                            readonly type: "string";
                                        };
                                        readonly currencySymbol: {
                                            readonly description: "Currency symbol";
                                            readonly type: "string";
                                        };
                                        readonly currencyPosition: {
                                            readonly description: "Currency position\n\n`before` `after`";
                                            readonly type: "string";
                                            readonly enum: readonly ["before", "after"];
                                        };
                                    };
                                };
                            };
                            readonly propertyRooms: {
                                readonly description: "List of room types for the property";
                                readonly type: "array";
                                readonly items: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly roomTypeID: {
                                            readonly description: "Room type ID";
                                            readonly type: "string";
                                        };
                                        readonly roomTypeName: {
                                            readonly description: "Room type name";
                                            readonly type: "string";
                                        };
                                        readonly roomTypeNameShort: {
                                            readonly description: "Room type short name";
                                            readonly type: "string";
                                        };
                                        readonly roomTypeDescription: {
                                            readonly description: "Room Type Description";
                                            readonly type: "string";
                                        };
                                        readonly maxGuests: {
                                            readonly description: "Max number of guests allowed in the room type";
                                            readonly type: "integer";
                                        };
                                        readonly adultsIncluded: {
                                            readonly description: "Number of adults included on the basic room rate";
                                            readonly type: "integer";
                                        };
                                        readonly childrenIncluded: {
                                            readonly description: "Number of children included on the basic room rate";
                                            readonly type: "integer";
                                        };
                                        readonly roomTypePhotos: {
                                            readonly description: "List of photos for the room type";
                                            readonly type: "array";
                                            readonly items: {
                                                readonly type: "object";
                                                readonly properties: {
                                                    readonly thumb: {
                                                        readonly description: "Thumbnail URL";
                                                        readonly type: "string";
                                                    };
                                                    readonly image: {
                                                        readonly description: "Full Image URL";
                                                        readonly type: "string";
                                                    };
                                                };
                                            };
                                        };
                                        readonly roomTypeFeatures: {
                                            readonly description: "List of features for the room type";
                                            readonly type: "array";
                                            readonly items: {
                                                readonly type: "string";
                                            };
                                        };
                                        readonly roomRate: {
                                            readonly description: "Basic rate for the room, based on the parameters provided";
                                            readonly type: "number";
                                        };
                                        readonly roomRateID: {
                                            readonly description: "Specific Rate ID used for the room type ID";
                                            readonly type: "string";
                                        };
                                        readonly ratePlanNamePublic: {
                                            readonly description: "Rate plan public name";
                                            readonly type: "string";
                                        };
                                        readonly ratePlanNamePrivate: {
                                            readonly description: "Rate plan private name";
                                            readonly type: "string";
                                        };
                                        readonly roomsAvailable: {
                                            readonly description: "Number of rooms available, based on the parameters provided";
                                            readonly type: "integer";
                                        };
                                        readonly adultsExtraCharge: {
                                            readonly description: "Total extra charge for number of adults, depending on room settings (see \"adultsIncluded\" field). It is an associative array, where the key is the number of adults, and the value is the total extra charge when the number of adults is selected.";
                                            readonly type: "array";
                                            readonly items: {
                                                readonly type: "object";
                                                readonly additionalProperties: true;
                                            };
                                        };
                                        readonly childrenExtraCharge: {
                                            readonly description: "Total extra charge for number of children, depending on room settings (see \"childrenIncluded\" field). It is an associative array, where the key is the number of children, and the value is the total extra charge when the number of children is selected.";
                                            readonly type: "array";
                                            readonly items: {
                                                readonly type: "object";
                                                readonly additionalProperties: true;
                                            };
                                        };
                                        readonly roomRateDetailed: {
                                            readonly description: "Detailed information on the rates, if requested";
                                            readonly type: "array";
                                            readonly items: {
                                                readonly type: "object";
                                                readonly properties: {
                                                    readonly date: {
                                                        readonly description: "";
                                                        readonly type: "string";
                                                        readonly format: "date";
                                                    };
                                                    readonly rate: {
                                                        readonly description: "";
                                                        readonly type: "number";
                                                    };
                                                };
                                            };
                                        };
                                        readonly derivedType: {
                                            readonly description: "type of deriving (only if current rate was derived from other one).\n\n`fixed` `percentage`";
                                            readonly type: "string";
                                            readonly enum: readonly ["fixed", "percentage"];
                                        };
                                        readonly derivedValue: {
                                            readonly description: "Can be positive or negative (only if current rate was derived from other one).";
                                            readonly type: "number";
                                        };
                                        readonly individualRooms: {
                                            readonly description: "Individual rooms available to be booked (if set on backend)";
                                            readonly type: "array";
                                            readonly items: {
                                                readonly type: "object";
                                                readonly properties: {
                                                    readonly roomID: {
                                                        readonly description: "";
                                                        readonly type: "string";
                                                    };
                                                    readonly roomName: {
                                                        readonly description: "";
                                                        readonly type: "number";
                                                    };
                                                    readonly dormRoomName: {
                                                        readonly description: "Name of the dorm room. Used for the shared dorm beds that are organized into rooms within the same room type.";
                                                        readonly type: "string";
                                                    };
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
                readonly roomCount: {
                    readonly description: "Number of results (room types) returned";
                    readonly type: "integer";
                };
                readonly count: {
                    readonly description: "Number of results (properties) returned";
                    readonly type: "integer";
                };
                readonly total: {
                    readonly description: "Total number of results (properties)";
                    readonly type: "integer";
                };
                readonly message: {
                    readonly description: "To be used in case any error occurs (if success = false). If success = true, it does not exist.";
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const Getcurrencysettings: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly propertyID: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Property ID";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly success: {
                    readonly description: "Returns if the request could be completed";
                    readonly type: "boolean";
                };
                readonly data: {
                    readonly description: "Currency Settings";
                    readonly type: "object";
                    readonly properties: {
                        readonly default: {
                            readonly description: "Default Currency ISO CODE";
                            readonly type: "string";
                        };
                        readonly acceptable: {
                            readonly description: "Acceptable Currency ISO CODEs";
                            readonly type: "array";
                            readonly items: {
                                readonly type: "string";
                            };
                        };
                        readonly format: {
                            readonly description: "Currency Format";
                            readonly type: "object";
                            readonly properties: {
                                readonly decimal: {
                                    readonly description: "Decimal separator";
                                    readonly type: "string";
                                };
                                readonly thousand: {
                                    readonly description: "Thousand separator";
                                    readonly type: "string";
                                };
                            };
                        };
                        readonly rates: {
                            readonly description: "Currency rates";
                            readonly type: "object";
                            readonly properties: {
                                readonly fixed: {
                                    readonly description: "Fixed currency rates (configured by the property)";
                                    readonly type: "array";
                                    readonly items: {
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly currency: {
                                                readonly description: "Currency ISO CODE";
                                                readonly type: "string";
                                            };
                                            readonly rate: {
                                                readonly description: "Currency rate";
                                                readonly type: "number";
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
                readonly message: {
                    readonly description: "To be used in case any error occurs (if success = false). If success = true, it does not exist.";
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const Getcustomfields: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly propertyID: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Property ID";
                };
                readonly customFieldID: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Field identifier";
                };
                readonly shortcode: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Internal reference and is used for integration purposes such as custom links and the API";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly success: {
                    readonly description: "Returns if the request could be completed";
                    readonly type: "boolean";
                };
                readonly data: {
                    readonly description: "Field details";
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly propertyID: {
                                readonly description: "Unique hotel identifier";
                                readonly type: "string";
                            };
                            readonly name: {
                                readonly description: "Field name";
                                readonly type: "string";
                            };
                            readonly shortcode: {
                                readonly description: "Internal reference and is used for integration purposes such as custom links and the API";
                                readonly type: "string";
                            };
                            readonly applyTo: {
                                readonly description: "Where put this field in reservation or guest section of the booking.\n\n`reservation` `guest`";
                                readonly type: "string";
                                readonly enum: readonly ["reservation", "guest"];
                            };
                            readonly required: {
                                readonly description: "Specify whether this field is required to be filled out.";
                                readonly type: "boolean";
                            };
                            readonly isPersonal: {
                                readonly description: "Specifies if the contents of this field may contain personal information (GDPR).";
                                readonly type: "boolean";
                            };
                            readonly maxCharacters: {
                                readonly description: "Maximum number of characters allowed to be entered in this field.";
                                readonly type: "integer";
                            };
                            readonly type: {
                                readonly description: "The field's input type.\n\n`input` `text`";
                                readonly type: "string";
                                readonly enum: readonly ["input", "text"];
                            };
                            readonly displayed: {
                                readonly description: "¹ Specify where this custom field to show up.";
                                readonly type: "array";
                                readonly items: {
                                    readonly type: "string";
                                    readonly enum: readonly ["reservation", "booking", "card"];
                                    readonly description: "`reservation` `booking` `card`";
                                };
                            };
                        };
                    };
                };
                readonly message: {
                    readonly description: "To be used in case any error occurs (if success = false). If success = true, it does not exist.";
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const Getdashboard: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly propertyID: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Property ID";
                };
                readonly date: {
                    readonly type: "string";
                    readonly format: "date";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Return data for this date. Format: YYYY-MM-DD";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly success: {
                    readonly description: "Returns if the request could be completed";
                    readonly type: "boolean";
                    readonly default: true;
                };
                readonly data: {
                    readonly description: "Data to be displayed on dashboard";
                    readonly type: "object";
                    readonly properties: {
                        readonly roomsOccupied: {
                            readonly description: "Number of rooms occupied at the moment";
                            readonly type: "integer";
                        };
                        readonly percentageOccupied: {
                            readonly description: "Percentage of rooms occupied (rooms occupied/rooms total) for the current day";
                            readonly type: "integer";
                        };
                        readonly arrivals: {
                            readonly description: "Number of arrivals (check-ins) expected for the current day";
                            readonly type: "integer";
                        };
                        readonly departures: {
                            readonly description: "Number of departures (check-outs) expected for the current day";
                            readonly type: "integer";
                        };
                        readonly inHouse: {
                            readonly description: "Number of rooms occupied, and not expected to have a check-out for the current day";
                            readonly type: "integer";
                        };
                    };
                };
                readonly message: {
                    readonly description: "To be used in case any error occurs (if success = false). If success = true, it does not exist.";
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const Getemailschedule: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly propertyID: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Property ID";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly success: {
                    readonly description: "Returns if the request could be completed";
                    readonly type: "boolean";
                };
                readonly data: {
                    readonly description: "List of existing email schedules";
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly emailScheduleID: {
                                readonly description: "ID of the email schedule";
                                readonly type: "string";
                            };
                            readonly name: {
                                readonly description: "Name of the email schedule";
                                readonly type: "string";
                            };
                            readonly emailTemplateID: {
                                readonly description: "ID of the email template used in this schedule";
                                readonly type: "string";
                            };
                            readonly templateName: {
                                readonly description: "Name of the email template used in this schedule";
                                readonly type: "string";
                            };
                            readonly isActive: {
                                readonly description: "True if email template is active; false if not";
                                readonly type: "boolean";
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const Getemailtemplates: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly propertyID: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Property ID";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly success: {
                    readonly description: "Returns if the request could be completed";
                    readonly type: "boolean";
                };
                readonly data: {
                    readonly description: "List of existing email templates";
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly emailTemplateID: {
                                readonly description: "ID of the email template";
                                readonly type: "string";
                            };
                            readonly name: {
                                readonly description: "Name";
                                readonly type: "string";
                            };
                            readonly subject: {
                                readonly description: "Subject";
                                readonly type: "string";
                            };
                            readonly isActive: {
                                readonly description: "True if email template is active; false if not";
                                readonly type: "boolean";
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const Getfiles: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly propertyID: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Property ID";
                };
                readonly groupCode: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The group code, if the files are to be fetched from a group profile";
                };
                readonly sortBy: {
                    readonly type: "string";
                    readonly enum: readonly ["name", "type", "source", "date"];
                    readonly default: "date";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Sort By parameter";
                };
                readonly orderBy: {
                    readonly type: "string";
                    readonly enum: readonly ["desc", "asc"];
                    readonly default: "desc";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Order response in DESCending or ASCending order, used together with sortBy";
                };
                readonly name: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Filter filess by name. Include only with names containing specified string";
                };
                readonly pageNumber: {
                    readonly type: "integer";
                    readonly default: 1;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Results page number";
                };
                readonly pageSize: {
                    readonly type: "integer";
                    readonly default: 100;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Results page size. Max = 100";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly success: {
                    readonly description: "Returns if the request could be completed";
                    readonly type: "boolean";
                };
                readonly data: {
                    readonly description: "Files linked to the property";
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly fileID: {
                                readonly description: "File's unique identifier";
                                readonly type: "string";
                            };
                            readonly name: {
                                readonly description: "File Name";
                                readonly type: "string";
                            };
                            readonly type: {
                                readonly description: "File Type";
                                readonly type: "string";
                            };
                            readonly source: {
                                readonly description: "File Source";
                                readonly type: "string";
                            };
                            readonly dateCreated: {
                                readonly description: "File creation date";
                                readonly type: "string";
                                readonly format: "date-time";
                            };
                            readonly url: {
                                readonly description: "File's URL to download";
                                readonly type: "string";
                            };
                        };
                    };
                };
                readonly count: {
                    readonly description: "Number of results returned";
                    readonly type: "integer";
                };
                readonly total: {
                    readonly description: "Total number of results for supplied parameters";
                    readonly type: "integer";
                };
                readonly message: {
                    readonly description: "To be used in case any error occurs (if success = false). If success = true, it does not exist.";
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const Getgroupnotes: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly propertyID: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Property ID";
                };
                readonly groupCode: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Group code";
                };
                readonly pageSize: {
                    readonly type: "integer";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Number of groups notes to return per page (min: 1, max: 100)";
                };
                readonly pageNumber: {
                    readonly type: "integer";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Which page in the results to access";
                };
            };
            readonly required: readonly ["propertyID", "groupCode", "pageSize", "pageNumber"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly success: {
                    readonly description: "Success";
                    readonly type: "boolean";
                };
                readonly code: {
                    readonly description: "HTTP status code";
                    readonly type: "integer";
                };
                readonly data: {
                    readonly description: "Data";
                    readonly type: "object";
                    readonly properties: {
                        readonly id: {
                            readonly description: "ID for the note";
                            readonly type: "string";
                        };
                        readonly group_profile_id: {
                            readonly description: "Group profile ID";
                            readonly type: "string";
                        };
                        readonly text: {
                            readonly description: "Note text";
                            readonly type: "string";
                        };
                        readonly created_by: {
                            readonly description: "Created by";
                            readonly type: "string";
                        };
                        readonly created_at: {
                            readonly description: "Created at";
                            readonly type: "string";
                        };
                        readonly updated_at: {
                            readonly description: "Updated at";
                            readonly type: "string";
                        };
                        readonly archived: {
                            readonly description: "Note archived";
                            readonly type: "boolean";
                        };
                        readonly archived_at: {
                            readonly description: "Note archived at";
                            readonly type: "string";
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const Getgroups: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly propertyID: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Property ID";
                };
                readonly groupCode: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Unique ID for a group";
                };
                readonly type: {
                    readonly type: "string";
                    readonly enum: readonly ["group", "company", "travel_agent", "wholesaler"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "The type of group";
                };
                readonly status: {
                    readonly type: "string";
                    readonly enum: readonly ["open", "closed"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Group status";
                };
                readonly createdFrom: {
                    readonly type: "string";
                    readonly format: "date-time";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Datetime (lower limit) to be queried";
                };
                readonly createdTo: {
                    readonly type: "string";
                    readonly format: "date-time";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Datetime (upper limit) to be queried";
                };
                readonly pageSize: {
                    readonly type: "integer";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Number of groups to return per page (min: 1, max: 100)";
                };
                readonly pageNumber: {
                    readonly type: "integer";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Which page in the results to access";
                };
            };
            readonly required: readonly ["propertyID"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly success: {
                    readonly description: "Success";
                    readonly type: "boolean";
                };
                readonly data: {
                    readonly description: "Data";
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly groupCode: {
                                readonly description: "Unique ID for a group";
                                readonly type: "string";
                            };
                            readonly name: {
                                readonly description: "The name of the group";
                                readonly type: "string";
                            };
                            readonly type: {
                                readonly description: "The type of the group\n\n`group` `company` `travel_agent` `wholesaler`";
                                readonly type: "string";
                                readonly enum: readonly ["group", "company", "travel_agent", "wholesaler"];
                            };
                            readonly status: {
                                readonly description: "Group status\n\n`open` `closed`";
                                readonly type: "string";
                                readonly enum: readonly ["open", "closed"];
                            };
                            readonly created: {
                                readonly description: "Group created time";
                                readonly type: "string";
                                readonly format: "date-time";
                            };
                            readonly sourceID: {
                                readonly description: "The third-party source ID for this group, can be null";
                                readonly type: "string";
                            };
                            readonly address1: {
                                readonly description: "Address";
                                readonly type: "string";
                            };
                            readonly address2: {
                                readonly description: "Address2";
                                readonly type: "string";
                            };
                            readonly city: {
                                readonly description: "City";
                                readonly type: "string";
                            };
                            readonly zip: {
                                readonly description: "Zip";
                                readonly type: "string";
                            };
                            readonly state: {
                                readonly description: "State";
                                readonly type: "string";
                            };
                            readonly commissionType: {
                                readonly description: "Commission type\n\n`fixed` `percent`";
                                readonly type: "string";
                                readonly enum: readonly ["fixed", "percent"];
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const Getguest: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly propertyID: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Property ID";
                };
                readonly reservationID: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Reservation Unique Identifier. Required if no guestID is provided.";
                };
                readonly guestID: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Guest ID. Required if no reservationID is provided.";
                };
                readonly includeGuestRequirements: {
                    readonly type: "boolean";
                    readonly default: false;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Includes guest requirements data in the response";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly success: {
                    readonly description: "Returns if the request could be completed";
                    readonly type: "boolean";
                };
                readonly data: {
                    readonly description: "Details for the guest queried";
                    readonly type: "object";
                    readonly properties: {
                        readonly firstName: {
                            readonly description: "First Name";
                            readonly type: "string";
                        };
                        readonly lastName: {
                            readonly description: "Last Name";
                            readonly type: "string";
                        };
                        readonly gender: {
                            readonly description: "Gender\n\n`M` `F` `N/A`";
                            readonly type: "string";
                            readonly enum: readonly ["M", "F", "N/A"];
                        };
                        readonly email: {
                            readonly description: "Email";
                            readonly type: "string";
                        };
                        readonly phone: {
                            readonly description: "Phone number";
                            readonly type: "string";
                        };
                        readonly cellPhone: {
                            readonly description: "Cell phone number";
                            readonly type: "string";
                        };
                        readonly country: {
                            readonly description: "Country (2 digit code)";
                            readonly type: "string";
                        };
                        readonly address: {
                            readonly description: "Address";
                            readonly type: "string";
                        };
                        readonly address2: {
                            readonly description: "Address 2";
                            readonly type: "string";
                        };
                        readonly city: {
                            readonly description: "City";
                            readonly type: "string";
                        };
                        readonly zip: {
                            readonly description: "Zip";
                            readonly type: "string";
                        };
                        readonly state: {
                            readonly description: "State";
                            readonly type: "string";
                        };
                        readonly birthDate: {
                            readonly description: "Birth date";
                            readonly oneOf: readonly [{
                                readonly type: "string";
                                readonly format: "date";
                            }, {
                                readonly type: "string";
                            }];
                        };
                        readonly documentType: {
                            readonly description: "Document Type";
                            readonly type: "string";
                        };
                        readonly documentNumber: {
                            readonly description: "Document number";
                            readonly type: "string";
                        };
                        readonly documentIssueDate: {
                            readonly description: "Document Issue Date, can be null";
                            readonly oneOf: readonly [{
                                readonly type: "string";
                                readonly format: "date";
                            }, {
                                readonly type: "string";
                            }];
                        };
                        readonly documentIssuingCountry: {
                            readonly description: "Document Issuing Country (2-digits code)";
                            readonly type: "string";
                        };
                        readonly documentExpirationDate: {
                            readonly description: "Document Expiration Date, can be null";
                            readonly oneOf: readonly [{
                                readonly type: "string";
                                readonly format: "date";
                            }, {
                                readonly type: "string";
                            }];
                        };
                        readonly customFields: {
                            readonly description: "";
                            readonly type: "array";
                            readonly items: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly customFieldName: {
                                        readonly description: "";
                                        readonly type: "string";
                                    };
                                    readonly customFieldValue: {
                                        readonly description: "";
                                        readonly type: "string";
                                    };
                                };
                            };
                        };
                        readonly guestRequirements: {
                            readonly description: "Guest requirements data. Only included if `includeGuestRequirements=true`.";
                            readonly type: "array";
                            readonly items: {
                                readonly type: "object";
                                readonly additionalProperties: true;
                            };
                        };
                        readonly specialRequests: {
                            readonly description: "Special requests made by the guest at the time of the booking";
                            readonly type: "string";
                        };
                        readonly taxID: {
                            readonly description: "Tax ID";
                            readonly type: "string";
                        };
                        readonly companyTaxID: {
                            readonly description: "Company tax ID";
                            readonly type: "string";
                        };
                        readonly companyName: {
                            readonly description: "Company name";
                            readonly type: "string";
                        };
                        readonly isAnonymized: {
                            readonly description: "Flag indicating the guest data was removed upon request";
                            readonly type: "boolean";
                        };
                        readonly guestOptIn: {
                            readonly description: "If guest has opted-in to marketing communication or not";
                            readonly type: "boolean";
                        };
                        readonly isMerged: {
                            readonly description: "Flag indicating that guest was merged";
                            readonly type: "boolean";
                        };
                        readonly newGuestID: {
                            readonly description: "Merged guest ID";
                            readonly type: "string";
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const Getguestlist: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly propertyIDs: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "List of property IDs, comma-separated, i.e. 37,345,89";
                };
                readonly resultsFrom: {
                    readonly type: "string";
                    readonly format: "date-time";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Inferior limit datetime, used to filter guests result, based on latest creation/modification date";
                };
                readonly resultsTo: {
                    readonly type: "string";
                    readonly format: "date-time";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Superior limit datetime, used to filter guests result, based on latest creation/modification date";
                };
                readonly checkInFrom: {
                    readonly type: "string";
                    readonly format: "date";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Filters guests result to return only guests with check-in date range starting on this date";
                };
                readonly checkInTo: {
                    readonly type: "string";
                    readonly format: "date";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Filters guests result to return only guests with check-in date range ending on this date";
                };
                readonly checkOutFrom: {
                    readonly type: "string";
                    readonly format: "date";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Filters guests result to return only guests with check-out date range starting on this date";
                };
                readonly checkOutTo: {
                    readonly type: "string";
                    readonly format: "date";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Filters guests result to return only guests with check-out date range ending on this date";
                };
                readonly guestFirstName: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Filters guests result based on Guest First Name";
                };
                readonly guestLastName: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Filters guests result based on Guest Last Name";
                };
                readonly guestEmail: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Filters guests result based on Guest Email";
                };
                readonly guestPhone: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Filters guests result based on Guest Phone Number";
                };
                readonly guestCellPhone: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Filters guests result based on Guest Cell Phone Number";
                };
                readonly status: {
                    readonly type: "string";
                    readonly enum: readonly ["in_progress", "confirmed", "not_confirmed", "canceled", "checked_in", "checked_out", "no_show"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Reservation status <br /> If more than one, send as comma-separated values. i.e. in_progress,confirmed";
                };
                readonly sortBy: {
                    readonly type: "string";
                    readonly enum: readonly ["creation", "modification"];
                    readonly default: "modification";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Sort By parameter";
                };
                readonly includeGuestInfo: {
                    readonly type: "boolean";
                    readonly default: false;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "If API response should return with more of Guest's information";
                };
                readonly excludeSecondaryGuests: {
                    readonly type: "boolean";
                    readonly default: false;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "If true, response only returns main guest's";
                };
                readonly includeGuestRequirements: {
                    readonly type: "boolean";
                    readonly default: false;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Includes guest requirements data in the response";
                };
                readonly pageNumber: {
                    readonly type: "integer";
                    readonly default: 1;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Results page number";
                };
                readonly pageSize: {
                    readonly type: "integer";
                    readonly default: 100;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Results page size. Max = 100";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly success: {
                    readonly description: "Returns if the request could be completed";
                    readonly type: "boolean";
                };
                readonly data: {
                    readonly description: "Details for the guest linked to the property (key is the Guest ID)";
                    readonly type: "object";
                    readonly additionalProperties: {
                        readonly type: "object";
                        readonly properties: {
                            readonly reservationID: {
                                readonly description: "Reservation's unique identifier";
                                readonly type: "string";
                            };
                            readonly guestName: {
                                readonly description: "Guest Name";
                                readonly type: "string";
                            };
                            readonly guestEmail: {
                                readonly description: "Guest Email";
                                readonly type: "string";
                            };
                            readonly guestID: {
                                readonly description: "Guest ID";
                                readonly type: "string";
                            };
                            readonly dateCreated: {
                                readonly description: "Reservation creation date";
                                readonly type: "string";
                                readonly format: "date-time";
                            };
                            readonly dateModified: {
                                readonly description: "Reservation modification date";
                                readonly type: "string";
                                readonly format: "date-time";
                            };
                            readonly isMainGuest: {
                                readonly description: "If the guest is the main guest of its reservation";
                                readonly type: "boolean";
                            };
                            readonly isAnonymized: {
                                readonly description: "Flag indicating the guest data was removed upon request";
                                readonly type: "boolean";
                            };
                            readonly guestFirstName: {
                                readonly description: "Guest First Name";
                                readonly type: "string";
                            };
                            readonly guestLastName: {
                                readonly description: "Guest Last Name";
                                readonly type: "string";
                            };
                            readonly guestGender: {
                                readonly description: "Guest Gender\n\n`M` `F` `N/A`";
                                readonly type: "string";
                                readonly enum: readonly ["M", "F", "N/A"];
                            };
                            readonly guestPhone: {
                                readonly description: "Guest Phone";
                                readonly type: "string";
                            };
                            readonly guestCellPhone: {
                                readonly description: "Guest Cell Phone";
                                readonly type: "string";
                            };
                            readonly guestAddress1: {
                                readonly description: "Guest Address (line 1)";
                                readonly type: "string";
                            };
                            readonly guestAddress2: {
                                readonly description: "Guest Address (line 2)";
                                readonly type: "string";
                            };
                            readonly guestCity: {
                                readonly description: "Guest City";
                                readonly type: "string";
                            };
                            readonly guestState: {
                                readonly description: "Guest State";
                                readonly type: "string";
                            };
                            readonly guestCountry: {
                                readonly description: "Guest Country";
                                readonly type: "string";
                            };
                            readonly guestZip: {
                                readonly description: "Guest Zip code";
                                readonly type: "string";
                            };
                            readonly guestBirthDate: {
                                readonly description: "Guest Birth Date";
                                readonly type: "string";
                                readonly format: "date";
                            };
                            readonly guestDocumentType: {
                                readonly description: "Guest Document Type";
                                readonly type: "string";
                            };
                            readonly guestDocumentNumber: {
                                readonly description: "Guest Document Number";
                                readonly type: "string";
                            };
                            readonly guestDocumentIssueDate: {
                                readonly description: "Guest Document Issue Date";
                                readonly type: "string";
                                readonly format: "date";
                            };
                            readonly guestDocumentIssuingCountry: {
                                readonly description: "Guest Document Issuing Country";
                                readonly type: "string";
                            };
                            readonly guestDocumentExpirationDate: {
                                readonly description: "Guest Document Expiration Date";
                                readonly type: "string";
                                readonly format: "date";
                            };
                            readonly taxID: {
                                readonly description: "Tax ID";
                                readonly type: "string";
                            };
                            readonly companyTaxID: {
                                readonly description: "Company tax ID";
                                readonly type: "string";
                            };
                            readonly companyName: {
                                readonly description: "Company name";
                                readonly type: "string";
                            };
                            readonly guestOptIn: {
                                readonly description: "If guest has opted-in to marketing communication or not";
                                readonly type: "boolean";
                            };
                            readonly guestRequirements: {
                                readonly description: "Guest requirements data. Only included if `includeGuestRequirements=true`.";
                                readonly type: "array";
                                readonly items: {
                                    readonly type: "object";
                                    readonly additionalProperties: true;
                                };
                            };
                            readonly guestNotes: {
                                readonly description: "Guest Notes";
                                readonly type: "array";
                                readonly items: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly ID: {
                                            readonly description: "Guest Notes ID";
                                            readonly type: "string";
                                        };
                                        readonly note: {
                                            readonly description: "Guest Notes \"note\"";
                                            readonly type: "string";
                                        };
                                    };
                                };
                            };
                            readonly status: {
                                readonly description: "Reservation status<br /> in_progress - Reservation is pending confirmation<br /> confirmed - Reservation is confirmed<br /> not_confirmed - Reservation not passed confirmation<br /> canceled - Reservation is canceled<br /> checked_in - Guest is in hotel<br /> checked_out - Guest already left hotel<br /> no_show - Guest didn't showed up on check-in date\n\n`in_progress` `confirmed` `not_confirmed` `canceled` `checked_in` `checked_out` `no_show`";
                                readonly type: "string";
                                readonly enum: readonly ["in_progress", "confirmed", "not_confirmed", "canceled", "checked_in", "checked_out", "no_show"];
                            };
                            readonly isMerged: {
                                readonly description: "Flag indicating that guest was merged";
                                readonly type: "boolean";
                            };
                            readonly newGuestID: {
                                readonly description: "Merged guest ID";
                                readonly type: "string";
                            };
                        };
                    };
                };
                readonly count: {
                    readonly description: "Number of results returned";
                    readonly type: "integer";
                };
                readonly total: {
                    readonly description: "Total number of results";
                    readonly type: "integer";
                };
                readonly message: {
                    readonly description: "To be used in case any error occurs (if success = false). If success = true, it does not exist.";
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const Getguestnotes: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly propertyID: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Property ID";
                };
                readonly guestID: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Guest ID";
                };
            };
            readonly required: readonly ["guestID"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly success: {
                    readonly description: "Returns if the request could be completed";
                    readonly type: "boolean";
                };
                readonly data: {
                    readonly description: "Details for the notes on that reservation";
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly guestNoteID: {
                                readonly description: "Guest note ID";
                                readonly type: "string";
                            };
                            readonly userName: {
                                readonly description: "User Name";
                                readonly type: "string";
                            };
                            readonly dateCreated: {
                                readonly description: "Creation datetime";
                                readonly type: "string";
                                readonly format: "date-time";
                            };
                            readonly dateModified: {
                                readonly description: "Last modification datetime";
                                readonly type: "string";
                                readonly format: "date-time";
                            };
                            readonly guestNote: {
                                readonly description: "Note content";
                                readonly type: "string";
                            };
                        };
                    };
                };
                readonly message: {
                    readonly description: "To be used in case any error occurs (if success = false). If success = true, it does not exist.";
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const Getguestsbyfilter: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly propertyIDs: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "List of property IDs, comma-separated, i.e. 37,345,89";
                };
                readonly status: {
                    readonly type: "string";
                    readonly enum: readonly ["cancelled", "checked_out", "in_house", "not_checked_in"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Current guest status";
                };
                readonly reservationID: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly roomID: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly guestName: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly checkInFrom: {
                    readonly type: "string";
                    readonly format: "date";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Filters guests result to return only guests with check-in date range starting on this date";
                };
                readonly checkInTo: {
                    readonly type: "string";
                    readonly format: "date";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Filters guests result to return only guests with check-in date range ending on this date";
                };
                readonly checkOutFrom: {
                    readonly type: "string";
                    readonly format: "date";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Filters guests result to return only guests with check-out date range starting on this date";
                };
                readonly checkOutTo: {
                    readonly type: "string";
                    readonly format: "date";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Filters guests result to return only guests with check-out date range ending on this date";
                };
            };
            readonly required: readonly ["status"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly success: {
                    readonly description: "Returns if the request could be completed";
                    readonly type: "boolean";
                };
                readonly data: {
                    readonly description: "Details for the guest";
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly reservationID: {
                                readonly description: "Reservation's unique identifier";
                                readonly type: "string";
                            };
                            readonly guestName: {
                                readonly description: "";
                                readonly type: "string";
                            };
                            readonly guestID: {
                                readonly description: "Guest ID";
                                readonly type: "string";
                            };
                            readonly roomID: {
                                readonly description: "Room ID that the guest is assigned";
                                readonly type: "string";
                            };
                            readonly roomName: {
                                readonly description: "Name of the room where guest is assigned";
                                readonly type: "string";
                            };
                            readonly isMainGuest: {
                                readonly description: "True if the main guest of the reservation";
                                readonly type: "boolean";
                            };
                            readonly isAnonymized: {
                                readonly description: "Flag indicating the guest data was removed upon request";
                                readonly type: "boolean";
                            };
                            readonly guestOptIn: {
                                readonly description: "If guest has opted-in to marketing communication or not";
                                readonly type: "boolean";
                            };
                            readonly isMerged: {
                                readonly description: "Flag indicating that guest was merged";
                                readonly type: "boolean";
                            };
                            readonly newGuestID: {
                                readonly description: "Merged guest ID";
                                readonly type: "string";
                            };
                        };
                    };
                };
                readonly count: {
                    readonly description: "Number of results returned";
                    readonly type: "integer";
                };
                readonly total: {
                    readonly description: "Total number of results";
                    readonly type: "integer";
                };
                readonly message: {
                    readonly description: "To be used in case any error occurs (if success = false). If success = true, it does not exist.";
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const Getguestsbystatus: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly status: {
                    readonly type: "string";
                    readonly enum: readonly ["canceled", "checked_out", "in_house", "not_checked_in"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Guest status during the period";
                };
                readonly propertyID: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID for the properties to be queried (comma-separated, i.e. 37,345,89).<br /> It can be omitted if the API key is single-property, or to get results from all properties on an association.";
                };
                readonly resultsFrom: {
                    readonly type: "string";
                    readonly format: "date-time";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Used to filter guests result, and returns only the guests that were last modified starting on \"resultsFrom\" value";
                };
                readonly resultsTo: {
                    readonly type: "string";
                    readonly format: "date-time";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Used to filter guests result, and returns only the guests that were last modified ending on \"resultsTo\" value";
                };
                readonly pageNumber: {
                    readonly type: "integer";
                    readonly default: 1;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Results page number";
                };
                readonly pageSize: {
                    readonly type: "integer";
                    readonly default: 20;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Results page size. Max = 100";
                };
            };
            readonly required: readonly ["status"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly success: {
                    readonly description: "Returns if the request could be completed";
                    readonly type: "boolean";
                };
                readonly data: {
                    readonly description: "Details for the guest";
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly guestID: {
                                readonly description: "Guest ID";
                                readonly type: "string";
                            };
                            readonly reservationID: {
                                readonly description: "Reservation's unique identifier";
                                readonly type: "string";
                            };
                            readonly subReservationID: {
                                readonly description: "";
                                readonly type: "string";
                            };
                            readonly reservationCreatedDateTime: {
                                readonly description: "Reservation creation datetime";
                                readonly type: "string";
                                readonly format: "date-time";
                            };
                            readonly roomTypeID: {
                                readonly description: "Room Type ID that the guest is assigned";
                                readonly type: "string";
                            };
                            readonly roomID: {
                                readonly description: "Room ID that the guest is assigned";
                                readonly type: "string";
                            };
                            readonly roomName: {
                                readonly description: "Name of the room where guest is assigned";
                                readonly type: "string";
                            };
                            readonly guestFirstName: {
                                readonly description: "First Name";
                                readonly type: "string";
                            };
                            readonly guestLastName: {
                                readonly description: "Last Name";
                                readonly type: "string";
                            };
                            readonly guestGender: {
                                readonly description: "Gender\n\n`M` `F` `N/A`";
                                readonly type: "string";
                                readonly enum: readonly ["M", "F", "N/A"];
                            };
                            readonly guestEmail: {
                                readonly description: "Email Address";
                                readonly type: "string";
                            };
                            readonly guestPhone: {
                                readonly description: "Phone Number";
                                readonly type: "string";
                            };
                            readonly guestCellPhone: {
                                readonly description: "Cell Phone Number";
                                readonly type: "string";
                            };
                            readonly guestAddress1: {
                                readonly description: "Address";
                                readonly type: "string";
                            };
                            readonly guestAddress2: {
                                readonly description: "Address line 2";
                                readonly type: "string";
                            };
                            readonly guestCity: {
                                readonly description: "Address city";
                                readonly type: "string";
                            };
                            readonly guestState: {
                                readonly description: "Address state";
                                readonly type: "string";
                            };
                            readonly guestCountry: {
                                readonly description: "Address country";
                                readonly type: "string";
                            };
                            readonly guestZip: {
                                readonly description: "Address zip code";
                                readonly type: "string";
                            };
                            readonly guestBirthDate: {
                                readonly description: "Guests Date of Birth";
                                readonly type: "string";
                                readonly format: "date";
                            };
                            readonly guestDocumentType: {
                                readonly description: "Document Type";
                                readonly type: "string";
                            };
                            readonly guestDocumentNumber: {
                                readonly description: "Document Number";
                                readonly type: "string";
                            };
                            readonly guestDocumentIssueDate: {
                                readonly description: "Document Issue Date";
                                readonly type: "string";
                                readonly format: "date";
                            };
                            readonly guestDocumentIssuingCountry: {
                                readonly description: "Document Issuing Country";
                                readonly type: "string";
                            };
                            readonly guestDocumentExpirationDate: {
                                readonly description: "Document Expiration Date";
                                readonly type: "string";
                                readonly format: "date";
                            };
                            readonly startDate: {
                                readonly description: "Check-in date";
                                readonly type: "string";
                                readonly format: "date-time";
                            };
                            readonly endDate: {
                                readonly description: "Check-out date";
                                readonly type: "string";
                                readonly format: "date-time";
                            };
                            readonly customFields: {
                                readonly description: "List of custom fields";
                                readonly type: "array";
                                readonly items: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly customFieldName: {
                                            readonly description: "Custom Field Name";
                                            readonly type: "string";
                                        };
                                        readonly customFieldValue: {
                                            readonly description: "Custom Field Value";
                                            readonly type: "string";
                                        };
                                    };
                                };
                            };
                            readonly dateModified: {
                                readonly description: "Guest modification date";
                                readonly type: "string";
                                readonly format: "date-time";
                            };
                            readonly currentStatus: {
                                readonly description: "Current Status of the guest. Does not need to be equal to the status looked for (it may have had a status change outside of the filtered date range).\n\n`canceled` `checked_out` `in_house` `not_checked_in`";
                                readonly type: "string";
                                readonly enum: readonly ["canceled", "checked_out", "in_house", "not_checked_in"];
                            };
                            readonly statusDate: {
                                readonly description: "DateTime when the last status modification occurred.";
                                readonly type: "string";
                                readonly format: "date-time";
                            };
                            readonly taxID: {
                                readonly description: "Tax ID";
                                readonly type: "string";
                            };
                            readonly companyTaxID: {
                                readonly description: "Company tax ID";
                                readonly type: "string";
                            };
                            readonly companyName: {
                                readonly description: "Company name";
                                readonly type: "string";
                            };
                            readonly isAnonymized: {
                                readonly description: "Flag indicating the guest data was removed upon request";
                                readonly type: "boolean";
                            };
                            readonly isDeleted: {
                                readonly description: "Flag indicating the guest's reservation was removed";
                                readonly type: "boolean";
                            };
                            readonly guestOptIn: {
                                readonly description: "If guest has opted-in to marketing communication or not";
                                readonly type: "boolean";
                            };
                            readonly isMerged: {
                                readonly description: "Flag indicating that guest was merged";
                                readonly type: "boolean";
                            };
                            readonly newGuestID: {
                                readonly description: "Merged guest ID";
                                readonly type: "string";
                            };
                        };
                    };
                };
                readonly count: {
                    readonly description: "Number of results returned";
                    readonly type: "integer";
                };
                readonly total: {
                    readonly description: "Total number of results";
                    readonly type: "integer";
                };
                readonly message: {
                    readonly description: "To be used in case any error occurs (if success = false). If success = true, it does not exist.";
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const Getguestsmodified: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly propertyIDs: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "List of property IDs, comma-separated, i.e. 37,345,89";
                };
                readonly inHouse: {
                    readonly type: "boolean";
                    readonly default: false;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "When used, and true, will return guests only currently in-house. If the guest checks-out, it will not appear on the results.";
                };
                readonly resultsFrom: {
                    readonly type: "string";
                    readonly format: "date-time";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Inferior limit datetime, used to filter guests result, based on latest creation/modification date";
                };
                readonly resultsTo: {
                    readonly type: "string";
                    readonly format: "date-time";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Superior limit datetime, used to filter guests result, based on latest creation/modification date";
                };
                readonly checkInFrom: {
                    readonly type: "string";
                    readonly format: "date";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Filters guests result to return only guests with check-in date range starting on this date";
                };
                readonly checkInTo: {
                    readonly type: "string";
                    readonly format: "date";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Filters guests result to return only guests with check-in date range ending on this date";
                };
                readonly checkOutFrom: {
                    readonly type: "string";
                    readonly format: "date";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Filters guests result to return only guests with check-out date range starting on this date";
                };
                readonly checkOutTo: {
                    readonly type: "string";
                    readonly format: "date";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Filters guests result to return only guests with check-out date range ending on this date";
                };
                readonly includeGuestRequirements: {
                    readonly type: "boolean";
                    readonly default: false;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Includes guest requirements data in the response";
                };
                readonly pageNumber: {
                    readonly type: "integer";
                    readonly default: 1;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Results page number";
                };
                readonly pageSize: {
                    readonly type: "integer";
                    readonly default: 100;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Results page size. Max = 100";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly success: {
                    readonly description: "Returns if the request could be completed";
                    readonly type: "boolean";
                };
                readonly data: {
                    readonly description: "Details for the guest linked to the property";
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly guestID: {
                                readonly description: "Guest ID";
                                readonly type: "string";
                            };
                            readonly reservationID: {
                                readonly description: "Reservation's unique identifier";
                                readonly type: "string";
                            };
                            readonly roomTypeID: {
                                readonly description: "Room Type ID that the guest is assigned";
                                readonly type: "string";
                            };
                            readonly roomID: {
                                readonly description: "Room ID that the guest is assigned";
                                readonly type: "string";
                            };
                            readonly roomName: {
                                readonly description: "Name of the room where guest is assigned";
                                readonly type: "string";
                            };
                            readonly guestFirstName: {
                                readonly description: "First Name";
                                readonly type: "string";
                            };
                            readonly guestLastName: {
                                readonly description: "Last Name";
                                readonly type: "string";
                            };
                            readonly guestGender: {
                                readonly description: "\n\n`M` `F` `N/A`";
                                readonly type: "string";
                                readonly enum: readonly ["M", "F", "N/A"];
                            };
                            readonly guestEmail: {
                                readonly description: "Email Address";
                                readonly type: "string";
                            };
                            readonly guestPhone: {
                                readonly description: "Phone Number";
                                readonly type: "string";
                            };
                            readonly guestCellPhone: {
                                readonly description: "Cell Phone Number";
                                readonly type: "string";
                            };
                            readonly guestAddress1: {
                                readonly description: "Address";
                                readonly type: "string";
                            };
                            readonly guestAddress2: {
                                readonly description: "Address line 2";
                                readonly type: "string";
                            };
                            readonly guestCity: {
                                readonly description: "Address city";
                                readonly type: "string";
                            };
                            readonly guestState: {
                                readonly description: "Address state";
                                readonly type: "string";
                            };
                            readonly guestCountry: {
                                readonly description: "Address country";
                                readonly type: "string";
                            };
                            readonly guestZip: {
                                readonly description: "Address zip code";
                                readonly type: "string";
                            };
                            readonly guestBirthDate: {
                                readonly description: "Guests Date of Birth";
                                readonly type: "string";
                                readonly format: "date";
                            };
                            readonly guestDocumentType: {
                                readonly description: "Document Type";
                                readonly type: "string";
                            };
                            readonly guestDocumentNumber: {
                                readonly description: "Document Number";
                                readonly type: "string";
                            };
                            readonly guestDocumentIssueDate: {
                                readonly description: "Document Issue Date";
                                readonly type: "string";
                                readonly format: "date";
                            };
                            readonly guestDocumentIssuingCountry: {
                                readonly description: "Document Issuing Country";
                                readonly type: "string";
                            };
                            readonly guestDocumentExpirationDate: {
                                readonly description: "Document Expiration Date";
                                readonly type: "string";
                                readonly format: "date";
                            };
                            readonly startDate: {
                                readonly description: "Check-in date";
                                readonly type: "string";
                                readonly format: "date-time";
                            };
                            readonly endDate: {
                                readonly description: "Check-out date";
                                readonly type: "string";
                                readonly format: "date-time";
                            };
                            readonly guestRequirements: {
                                readonly description: "Guest requirements data. Only included if `includeGuestRequirements=true`.";
                                readonly type: "array";
                                readonly items: {
                                    readonly type: "object";
                                    readonly additionalProperties: true;
                                };
                            };
                            readonly customFields: {
                                readonly description: "List of custom fields";
                                readonly type: "array";
                                readonly items: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly customFieldName: {
                                            readonly description: "Custom Field Name";
                                            readonly type: "string";
                                        };
                                        readonly customFieldValue: {
                                            readonly description: "Custom Field Value";
                                            readonly type: "string";
                                        };
                                    };
                                };
                            };
                            readonly dateModified: {
                                readonly description: "Guest modification date";
                                readonly type: "string";
                                readonly format: "date-time";
                            };
                            readonly taxID: {
                                readonly description: "Tax ID";
                                readonly type: "string";
                            };
                            readonly companyTaxID: {
                                readonly description: "Company tax ID";
                                readonly type: "string";
                            };
                            readonly companyName: {
                                readonly description: "Company name";
                                readonly type: "string";
                            };
                            readonly isAnonymized: {
                                readonly description: "Flag indicating the guest data was removed upon request";
                                readonly type: "boolean";
                            };
                            readonly guestOptIn: {
                                readonly description: "If guest has opted-in to marketing communication or not";
                                readonly type: "boolean";
                            };
                            readonly isMerged: {
                                readonly description: "Flag indicating that guest was merged";
                                readonly type: "boolean";
                            };
                            readonly newGuestID: {
                                readonly description: "Merged guest ID";
                                readonly type: "string";
                            };
                        };
                    };
                };
                readonly count: {
                    readonly description: "Number of results returned";
                    readonly type: "integer";
                };
                readonly total: {
                    readonly description: "Total number of results";
                    readonly type: "integer";
                };
                readonly message: {
                    readonly description: "To be used in case any error occurs (if success = false). If success = true, it does not exist.";
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const Gethoteldetails: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly propertyID: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Property ID";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly success: {
                    readonly description: "Returns if the request could be completed";
                    readonly type: "boolean";
                };
                readonly data: {
                    readonly description: "Information about the hotel";
                    readonly type: "object";
                    readonly properties: {
                        readonly propertyID: {
                            readonly description: "Property ID";
                            readonly type: "string";
                        };
                        readonly organizationID: {
                            readonly description: "Organization ID";
                            readonly type: "string";
                        };
                        readonly propertyName: {
                            readonly description: "Property name";
                            readonly type: "string";
                        };
                        readonly propertyType: {
                            readonly description: "The type of property";
                            readonly type: "string";
                        };
                        readonly propertyImage: {
                            readonly description: "Property images details";
                            readonly type: "array";
                            readonly items: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly thumb: {
                                        readonly description: "Thumbnail URL";
                                        readonly type: "string";
                                    };
                                    readonly image: {
                                        readonly description: "Full Image URL";
                                        readonly type: "string";
                                    };
                                };
                            };
                        };
                        readonly propertyDescription: {
                            readonly description: "Property description";
                            readonly type: "string";
                        };
                        readonly propertyCurrency: {
                            readonly description: "Currency used by the property";
                            readonly type: "object";
                            readonly properties: {
                                readonly currencyCode: {
                                    readonly description: "Currency code";
                                    readonly type: "string";
                                };
                                readonly currencySymbol: {
                                    readonly description: "Currency symbol";
                                    readonly type: "string";
                                };
                                readonly currencyPosition: {
                                    readonly description: "Currency position\n\n`before` `after`";
                                    readonly type: "string";
                                    readonly enum: readonly ["before", "after"];
                                };
                                readonly currencyDecimalSeparator: {
                                    readonly description: "Currency decimal separator";
                                    readonly type: "string";
                                };
                                readonly currencyThousandsSeparator: {
                                    readonly description: "Currency thousands separator";
                                    readonly type: "string";
                                };
                            };
                        };
                        readonly propertyPrimaryLanguage: {
                            readonly description: "Property primary language";
                            readonly type: "string";
                        };
                        readonly propertyAdditionalPhotos: {
                            readonly description: "Property additional photos";
                            readonly type: "array";
                            readonly items: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly thumb: {
                                        readonly description: "Thumbnail URL";
                                        readonly type: "string";
                                    };
                                    readonly image: {
                                        readonly description: "Full Image URL";
                                        readonly type: "string";
                                    };
                                };
                            };
                        };
                        readonly propertyPhone: {
                            readonly description: "Property phone number";
                            readonly type: "string";
                        };
                        readonly propertyEmail: {
                            readonly description: "Property main email address";
                            readonly type: "string";
                        };
                        readonly propertyAddress: {
                            readonly description: "";
                            readonly type: "object";
                            readonly properties: {
                                readonly propertyAddress1: {
                                    readonly description: "";
                                    readonly type: "string";
                                };
                                readonly propertyAddress2: {
                                    readonly description: "";
                                    readonly type: "string";
                                };
                                readonly propertyCity: {
                                    readonly description: "";
                                    readonly type: "string";
                                };
                                readonly propertyState: {
                                    readonly description: "";
                                    readonly type: "string";
                                };
                                readonly propertyZip: {
                                    readonly description: "";
                                    readonly type: "string";
                                };
                                readonly propertyCountry: {
                                    readonly description: "";
                                    readonly type: "string";
                                };
                                readonly propertyLatitude: {
                                    readonly description: "";
                                    readonly type: "string";
                                };
                                readonly propertyLongitude: {
                                    readonly description: "";
                                    readonly type: "string";
                                };
                            };
                        };
                        readonly propertyPolicy: {
                            readonly description: "";
                            readonly type: "object";
                            readonly properties: {
                                readonly propertyCheckInTime: {
                                    readonly description: "";
                                    readonly type: "string";
                                    readonly format: "time";
                                };
                                readonly propertyCheckOutTime: {
                                    readonly description: "";
                                    readonly type: "string";
                                    readonly format: "time";
                                };
                                readonly propertyLateCheckOutAllowed: {
                                    readonly description: "";
                                    readonly type: "boolean";
                                };
                                readonly propertyLateCheckOutType: {
                                    readonly description: "If the property accepts late check-out, defines if the value is fixed, or a percentage of the daily rate\n\n`value` `percent`";
                                    readonly type: "string";
                                    readonly enum: readonly ["value", "percent"];
                                };
                                readonly propertyLateCheckOutValue: {
                                    readonly description: "The fixed value, or percentage of the daily rate, to be charged on a late check-out";
                                    readonly type: "string";
                                };
                                readonly propertyTermsAndConditions: {
                                    readonly description: "Text describing the terms and conditions to be displayed to guest";
                                    readonly type: "string";
                                };
                                readonly propertyFullPaymentBeforeCheckin: {
                                    readonly description: "If the property requires the full payment amount of the reservation to be collected prior to check-in";
                                    readonly type: "boolean";
                                };
                            };
                        };
                        readonly propertyAmenities: {
                            readonly description: "List of property amenities";
                            readonly type: "array";
                            readonly items: {
                                readonly type: "string";
                            };
                        };
                        readonly taxID: {
                            readonly description: "Tax ID number";
                            readonly type: "string";
                        };
                        readonly taxID2: {
                            readonly description: "Second Tax ID number";
                            readonly type: "string";
                        };
                        readonly companyLegalName: {
                            readonly description: "Legal company name";
                            readonly type: "string";
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const Gethotels: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly propertyIDs: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "List of property IDs, comma-separated, i.e. 37,345,89";
                };
                readonly propertyName: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Property name, or part of it";
                };
                readonly propertyCity: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Property city, or part of it";
                };
                readonly pageNumber: {
                    readonly type: "integer";
                    readonly default: 1;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Page number";
                };
                readonly pageSize: {
                    readonly type: "integer";
                    readonly default: 20;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Page size";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly success: {
                    readonly description: "Returns if the request could be completed";
                    readonly type: "boolean";
                };
                readonly data: {
                    readonly description: "Information about the hotels";
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly propertyID: {
                                readonly description: "Property ID";
                                readonly type: "string";
                            };
                            readonly organizationID: {
                                readonly description: "Organization ID";
                                readonly type: "string";
                            };
                            readonly propertyName: {
                                readonly description: "Property name";
                                readonly type: "string";
                            };
                            readonly propertyImage: {
                                readonly description: "Property image URL";
                                readonly type: "string";
                            };
                            readonly propertyDescription: {
                                readonly description: "Property description";
                                readonly type: "string";
                            };
                            readonly propertyTimezone: {
                                readonly description: "Property Timezone";
                                readonly type: "string";
                            };
                            readonly propertyCurrency: {
                                readonly description: "Currency used by the property";
                                readonly type: "array";
                                readonly items: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly currencyCode: {
                                            readonly description: "Currency code";
                                            readonly type: "string";
                                        };
                                        readonly currencySymbol: {
                                            readonly description: "Currency symbol";
                                            readonly type: "string";
                                        };
                                        readonly currencyPosition: {
                                            readonly description: "Currency position";
                                            readonly type: "string";
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
                readonly count: {
                    readonly description: "Number of results in this page";
                    readonly type: "integer";
                };
                readonly total: {
                    readonly description: "Total number of results";
                    readonly type: "integer";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const Gethouseaccountlist: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly propertyID: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Property ID";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly success: {
                    readonly description: "Returns if the request could be completed";
                    readonly type: "boolean";
                };
                readonly data: {
                    readonly description: "Details for the house accounts";
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly accountID: {
                                readonly description: "House Account ID";
                                readonly type: "string";
                            };
                            readonly propertyID: {
                                readonly description: "Property ID";
                                readonly type: "string";
                            };
                            readonly accountName: {
                                readonly description: "House Account name";
                                readonly type: "string";
                            };
                            readonly accountStatus: {
                                readonly description: "House Account status\n\n`open` `closed`";
                                readonly type: "string";
                                readonly enum: readonly ["open", "closed"];
                            };
                            readonly isPrivate: {
                                readonly description: "Whether House Account is set to private or not (if true \"userName\" will be specified)";
                                readonly type: "boolean";
                            };
                            readonly userName: {
                                readonly description: "Owner Name of private House Account";
                                readonly type: "string";
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const Gethousekeepers: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly propertyID: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID for the properties to be queried (comma-separated, i.e. 37,345,89). It can be omitted if the API key is single-property, or to get results from all properties on an association.";
                };
                readonly pageNumber: {
                    readonly type: "integer";
                    readonly default: 1;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Results page number";
                };
                readonly pageSize: {
                    readonly type: "integer";
                    readonly default: 100;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Results page size. Max = 1000";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly success: {
                    readonly description: "Returns if the request could be completed";
                    readonly type: "boolean";
                };
                readonly data: {
                    readonly description: "";
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly propertyID: {
                                readonly description: "Property ID";
                                readonly type: "string";
                            };
                            readonly housekeeperID: {
                                readonly description: "Housekeeper ID";
                                readonly type: "string";
                            };
                            readonly name: {
                                readonly description: "Housekeeper Name";
                                readonly type: "string";
                            };
                        };
                    };
                };
                readonly message: {
                    readonly description: "To be used in case any error occurs (if success = false). If success = true, it does not exist.";
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const Gethousekeepingstatus: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly propertyID: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Property ID";
                };
                readonly roomTypeIDs: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Filter by room type ID. If more than one, send as comma-separated, i.e. 37,345,89";
                };
                readonly housekeeperIDs: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Use this parameter to filter by housekeeper. If you need to specify multiple housekeepers, send their IDs as a comma-separated list (e.g., 37, 345, 89). To retrieve unassigned housekeepers, use the value 0.";
                };
                readonly roomCondition: {
                    readonly type: "string";
                    readonly enum: readonly ["clean", "dirty"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Condition of room";
                };
                readonly roomOccupied: {
                    readonly type: "boolean";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Flag for current room occupation status";
                };
                readonly pageNumber: {
                    readonly type: "integer";
                    readonly default: 1;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Results page number";
                };
                readonly pageSize: {
                    readonly type: "integer";
                    readonly default: 100;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Results page size. Max = 5000";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly success: {
                    readonly description: "Returns if the request could be completed";
                    readonly type: "boolean";
                };
                readonly data: {
                    readonly description: "";
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly date: {
                                readonly description: "Date for last date/time that the room condition changed";
                                readonly type: "string";
                                readonly format: "date";
                            };
                            readonly roomTypeID: {
                                readonly description: "ID of the room type";
                                readonly type: "string";
                            };
                            readonly roomTypeName: {
                                readonly description: "Name of the room type";
                                readonly type: "string";
                            };
                            readonly roomID: {
                                readonly description: "ID of room";
                                readonly type: "string";
                            };
                            readonly roomName: {
                                readonly description: "Name of room";
                                readonly type: "string";
                            };
                            readonly roomCondition: {
                                readonly description: "Room cleaning condition\n\n`dirty` `clean`";
                                readonly type: "string";
                                readonly enum: readonly ["dirty", "clean"];
                            };
                            readonly roomOccupied: {
                                readonly description: "Flag if room currently occupied";
                                readonly type: "boolean";
                            };
                            readonly roomBlocked: {
                                readonly description: "Flag if room is blocked";
                                readonly type: "boolean";
                            };
                            readonly frontdeskStatus: {
                                readonly description: "The following frontdesk statuses exist:<br /><br /> 'check-in' - There is no guest checking out, but there is a guest checking in.<br /> 'check-out' - Guest checking out today, but no guest checking in.<br /> 'stayover' - Guest is in-house, not checking out today and is staying for another night<br /> 'turnover' - Guest checking out today and another guest checking in today<br /> 'unused' - Room is not being used. There is no one there now due to check out, and no one arriving.\n\n`check-in` `check-out` `stayover` `turnover` `unused`";
                                readonly type: "string";
                                readonly enum: readonly ["check-in", "check-out", "stayover", "turnover", "unused"];
                            };
                            readonly housekeeperID: {
                                readonly description: "ID of Housekeeper";
                                readonly type: "string";
                            };
                            readonly housekeeper: {
                                readonly description: "Housekeeper name";
                                readonly type: "string";
                            };
                            readonly doNotDisturb: {
                                readonly description: "Flag if room as set as \"Do Not Disturb\"";
                                readonly type: "boolean";
                            };
                            readonly refusedService: {
                                readonly description: "Flag if room as set as \"Refused Service\"";
                                readonly type: "boolean";
                            };
                            readonly vacantPickup: {
                                readonly description: "Flag if room as set as \"Vacant Pickup\"";
                                readonly type: "boolean";
                            };
                            readonly roomComments: {
                                readonly description: "Room comments";
                                readonly type: "string";
                            };
                        };
                    };
                };
                readonly count: {
                    readonly description: "Results in current request";
                    readonly type: "integer";
                };
                readonly total: {
                    readonly description: "Total number of results for supplied parameters";
                    readonly type: "integer";
                };
                readonly message: {
                    readonly description: "To be used in case any error occurs (if success = false). If success = true, it does not exist.";
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const Getinvoice: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly propertyID: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Property ID";
                };
                readonly invoiceID: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Invoice ID";
                };
            };
            readonly required: readonly ["invoiceID"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly success: {
                    readonly description: "Returns if the request could be completed";
                    readonly type: "boolean";
                };
                readonly data: {
                    readonly description: "Invoice details";
                    readonly type: "object";
                    readonly properties: {
                        readonly invoiceID: {
                            readonly description: "Unique invoice ID";
                            readonly type: "string";
                        };
                        readonly userID: {
                            readonly description: "Unique ID of User who generated invoice";
                            readonly type: "string";
                        };
                        readonly reservationID: {
                            readonly description: "Reservation identifier";
                            readonly type: "string";
                        };
                        readonly prefix: {
                            readonly description: "Invoice ID prefix";
                            readonly type: "string";
                        };
                        readonly number: {
                            readonly description: "Invoice ID number";
                            readonly type: "integer";
                        };
                        readonly suffix: {
                            readonly description: "Invoice ID suffix";
                            readonly type: "string";
                        };
                        readonly documentIssueDate: {
                            readonly description: "Date and time when invoice was issued";
                            readonly type: "string";
                        };
                        readonly status: {
                            readonly description: "Invoice status";
                            readonly type: "string";
                        };
                        readonly billedTo: {
                            readonly description: "Information about who being billed";
                            readonly type: "object";
                            readonly properties: {
                                readonly id: {
                                    readonly description: "Unique identifier of who being billed Additional information about who being billed could be retrieved via corresponding API e.g.: for a guest it could be [getGuest](#tag/Guest/paths/~1getGuest/get)";
                                    readonly type: "string";
                                };
                                readonly type: {
                                    readonly description: "Type of who being billed\n\n`guest`";
                                    readonly type: "string";
                                    readonly enum: readonly ["guest"];
                                };
                            };
                        };
                        readonly items: {
                            readonly description: "Invoice items";
                            readonly type: "array";
                            readonly items: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly description: {
                                        readonly description: "";
                                        readonly type: "string";
                                    };
                                    readonly type: {
                                        readonly description: "";
                                        readonly type: "string";
                                    };
                                    readonly quantity: {
                                        readonly description: "";
                                        readonly type: "integer";
                                    };
                                    readonly totalAmount: {
                                        readonly description: "";
                                        readonly type: "string";
                                    };
                                    readonly netAmount: {
                                        readonly description: "";
                                        readonly type: "string";
                                    };
                                    readonly currency: {
                                        readonly description: "";
                                        readonly type: "string";
                                    };
                                    readonly taxes: {
                                        readonly description: "";
                                        readonly type: "array";
                                        readonly items: {
                                            readonly type: "object";
                                            readonly properties: {
                                                readonly name: {
                                                    readonly description: "";
                                                    readonly type: "string";
                                                };
                                                readonly amount: {
                                                    readonly description: "";
                                                    readonly type: "string";
                                                };
                                                readonly code: {
                                                    readonly description: "";
                                                    readonly type: "string";
                                                };
                                                readonly taxID: {
                                                    readonly description: "";
                                                    readonly type: "string";
                                                };
                                            };
                                        };
                                    };
                                    readonly fees: {
                                        readonly description: "";
                                        readonly type: "array";
                                        readonly items: {
                                            readonly type: "object";
                                            readonly properties: {
                                                readonly name: {
                                                    readonly description: "";
                                                    readonly type: "string";
                                                };
                                                readonly amount: {
                                                    readonly description: "";
                                                    readonly type: "string";
                                                };
                                                readonly code: {
                                                    readonly description: "";
                                                    readonly type: "string";
                                                };
                                                readonly feeID: {
                                                    readonly description: "";
                                                    readonly type: "string";
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                        };
                        readonly taxes: {
                            readonly description: "";
                            readonly type: "array";
                            readonly items: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly name: {
                                        readonly description: "";
                                        readonly type: "string";
                                    };
                                    readonly amount: {
                                        readonly description: "";
                                        readonly type: "string";
                                    };
                                    readonly code: {
                                        readonly description: "";
                                        readonly type: "string";
                                    };
                                    readonly taxID: {
                                        readonly description: "";
                                        readonly type: "string";
                                    };
                                };
                            };
                        };
                        readonly fees: {
                            readonly description: "";
                            readonly type: "array";
                            readonly items: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly name: {
                                        readonly description: "";
                                        readonly type: "string";
                                    };
                                    readonly amount: {
                                        readonly description: "";
                                        readonly type: "string";
                                    };
                                    readonly code: {
                                        readonly description: "";
                                        readonly type: "string";
                                    };
                                    readonly feeID: {
                                        readonly description: "";
                                        readonly type: "string";
                                    };
                                };
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const Getitem: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly propertyID: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Property ID";
                };
                readonly itemID: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Item identifier";
                };
            };
            readonly required: readonly ["itemID"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly success: {
                    readonly description: "Returns if the request could be completed";
                    readonly type: "boolean";
                };
                readonly data: {
                    readonly description: "Item details";
                    readonly type: "object";
                    readonly properties: {
                        readonly itemID: {
                            readonly description: "Item unique identifier";
                            readonly type: "string";
                        };
                        readonly itemType: {
                            readonly description: "Item type\n\n`product` `service`";
                            readonly type: "string";
                            readonly enum: readonly ["product", "service"];
                        };
                        readonly sku: {
                            readonly description: "Item SKU";
                            readonly type: "string";
                        };
                        readonly itemCode: {
                            readonly description: "Item code";
                            readonly type: "string";
                        };
                        readonly name: {
                            readonly description: "Item name";
                            readonly type: "string";
                        };
                        readonly categoryID: {
                            readonly description: "Item category identifier. Null if unset";
                            readonly type: "string";
                        };
                        readonly categoryName: {
                            readonly description: "Item category name. Empty if unset";
                            readonly type: "string";
                        };
                        readonly description: {
                            readonly description: "Item description";
                            readonly type: "string";
                        };
                        readonly price: {
                            readonly description: "Item price";
                            readonly type: "number";
                        };
                        readonly stockInventory: {
                            readonly description: "Track stock inventory for this item";
                            readonly type: "boolean";
                        };
                        readonly itemQuantity: {
                            readonly description: "<sup>1</sup> Current amount of item available";
                            readonly type: "integer";
                        };
                        readonly reorderThreshold: {
                            readonly description: "<sup>1</sup> Quantity at which to reorder item";
                            readonly type: "integer";
                        };
                        readonly reorderNeeded: {
                            readonly description: "<sup>1</sup> true - Whether item is at or below value set for reorder threshold.";
                            readonly type: "boolean";
                        };
                        readonly stopSell: {
                            readonly description: "<sup>1</sup> Quantity at which to stop selling product.";
                            readonly type: "integer";
                        };
                        readonly stopSellMet: {
                            readonly description: "<sup>1</sup> true - Whether item is at or below value set for stop-sell threshold.";
                            readonly type: "boolean";
                        };
                        readonly taxes: {
                            readonly description: "<sup>2</sup> Details of the taxes applicable";
                            readonly type: "array";
                            readonly items: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly taxName: {
                                        readonly description: "<sup>2</sup> Name of the tax";
                                        readonly type: "string";
                                    };
                                    readonly taxValue: {
                                        readonly description: "<sup>2</sup> Value of the tax";
                                        readonly type: "number";
                                    };
                                };
                            };
                        };
                        readonly totalTaxes: {
                            readonly description: "<sup>2</sup> Total value of the taxes";
                            readonly type: "number";
                        };
                        readonly fees: {
                            readonly description: "<sup>2</sup> Details of the fees applicable";
                            readonly type: "array";
                            readonly items: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly feeName: {
                                        readonly description: "<sup>2</sup> Name of the fee";
                                        readonly type: "string";
                                    };
                                    readonly feeValue: {
                                        readonly description: "<sup>2</sup> Value of the fee";
                                        readonly type: "number";
                                    };
                                };
                            };
                        };
                        readonly totalFees: {
                            readonly description: "<sup>2</sup> Total value of the fees";
                            readonly type: "number";
                        };
                        readonly priceWithoutFeesAndTaxes: {
                            readonly description: "<sup>2</sup> item price subtracting the included taxes";
                            readonly type: "number";
                        };
                        readonly grandTotal: {
                            readonly description: "<sup>2</sup> item price with fees and taxes";
                            readonly type: "number";
                        };
                    };
                };
                readonly message: {
                    readonly description: "To be used in case any error occurs (if success = false). If success = true, it does not exist.";
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const Getitemcategories: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly propertyID: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Property ID";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly success: {
                    readonly description: "Returns if the request could be completed";
                    readonly type: "boolean";
                };
                readonly data: {
                    readonly description: "Categories details";
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly categoryID: {
                                readonly description: "Category unique identifier";
                                readonly type: "string";
                            };
                            readonly categoryName: {
                                readonly description: "Category name";
                                readonly type: "string";
                            };
                            readonly categoryCode: {
                                readonly description: "Category code";
                                readonly type: "string";
                            };
                            readonly categoryColor: {
                                readonly description: "Category color (like #3b7be7)";
                                readonly type: "string";
                            };
                        };
                    };
                };
                readonly message: {
                    readonly description: "To be used in case any error occurs (if success = false). If success = true, it does not exist.";
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const Getitems: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly propertyID: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Property ID";
                };
                readonly itemCategoryID: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Category identifier";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly success: {
                    readonly description: "Returns if the request could be completed";
                    readonly type: "boolean";
                };
                readonly data: {
                    readonly description: "Item details";
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly itemID: {
                                readonly description: "Item unique identifier";
                                readonly type: "string";
                            };
                            readonly itemType: {
                                readonly description: "Item type\n\n`product` `service`";
                                readonly type: "string";
                                readonly enum: readonly ["product", "service"];
                            };
                            readonly sku: {
                                readonly description: "Item SKU";
                                readonly type: "string";
                            };
                            readonly itemCode: {
                                readonly description: "Item code";
                                readonly type: "string";
                            };
                            readonly name: {
                                readonly description: "Item name";
                                readonly type: "string";
                            };
                            readonly categoryID: {
                                readonly description: "Item category identifier. Null if unset";
                                readonly type: "string";
                            };
                            readonly categoryName: {
                                readonly description: "Item category name. Empty if unset";
                                readonly type: "string";
                            };
                            readonly description: {
                                readonly description: "Item description";
                                readonly type: "string";
                            };
                            readonly price: {
                                readonly description: "Item price";
                                readonly type: "number";
                            };
                            readonly stockInventory: {
                                readonly description: "Track stock inventory for this item";
                                readonly type: "boolean";
                            };
                            readonly itemQuantity: {
                                readonly description: "<sup>1</sup> Current amount of item available";
                                readonly type: "integer";
                            };
                            readonly reorderThreshold: {
                                readonly description: "<sup>1</sup> Quantity at which to reorder item";
                                readonly type: "integer";
                            };
                            readonly reorderNeeded: {
                                readonly description: "<sup>1</sup> true - Whether item is at or below value set for reorder threshold.";
                                readonly type: "boolean";
                            };
                            readonly stopSell: {
                                readonly description: "<sup>1</sup> Quantity at which to stop selling product.";
                                readonly type: "integer";
                            };
                            readonly stopSellMet: {
                                readonly description: "<sup>1</sup> true - Whether item is at or below value set for stop-sell threshold.";
                                readonly type: "boolean";
                            };
                            readonly taxes: {
                                readonly description: "<sup>2</sup> Details of the taxes applicable";
                                readonly type: "array";
                                readonly items: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly taxName: {
                                            readonly description: "<sup>2</sup> Name of the tax";
                                            readonly type: "string";
                                        };
                                        readonly taxValue: {
                                            readonly description: "<sup>2</sup> Value of the tax";
                                            readonly type: "number";
                                        };
                                    };
                                };
                            };
                            readonly totalTaxes: {
                                readonly description: "<sup>2</sup> Total value of the taxes";
                                readonly type: "number";
                            };
                            readonly fees: {
                                readonly description: "<sup>2</sup> Details of the fees applicable";
                                readonly type: "array";
                                readonly items: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly feeName: {
                                            readonly description: "<sup>2</sup> Name of the fee";
                                            readonly type: "string";
                                        };
                                        readonly feeValue: {
                                            readonly description: "<sup>2</sup> Value of the fee";
                                            readonly type: "number";
                                        };
                                    };
                                };
                            };
                            readonly totalFees: {
                                readonly description: "<sup>2</sup> Total value of the fees";
                                readonly type: "number";
                            };
                            readonly priceWithoutFeesAndTaxes: {
                                readonly description: "<sup>2</sup> item price subtracting the included taxes";
                                readonly type: "number";
                            };
                            readonly grandTotal: {
                                readonly description: "<sup>2</sup> item price with fees and taxes";
                                readonly type: "number";
                            };
                        };
                    };
                };
                readonly message: {
                    readonly description: "To be used in case any error occurs (if success = false). If success = true, it does not exist.";
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const Getpackagenames: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly propertyID: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Property ID";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly success: {
                    readonly description: "Returns if the request could be completed";
                    readonly type: "boolean";
                };
                readonly data: {
                    readonly description: "";
                    readonly type: "object";
                    readonly properties: {
                        readonly packageNames: {
                            readonly description: "Array of package names";
                            readonly type: "array";
                            readonly items: {
                                readonly type: "string";
                            };
                        };
                    };
                };
                readonly message: {
                    readonly description: "To be used in case any error occurs (if success = false). If success = true, it does not exist.";
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const Getpackages: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly propertyID: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Property ID";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly success: {
                    readonly description: "Returns if the request could be completed";
                    readonly type: "boolean";
                };
                readonly data: {
                    readonly description: "";
                    readonly type: "object";
                    readonly properties: {
                        readonly packageNames: {
                            readonly description: "Array of package names";
                            readonly type: "array";
                            readonly items: {
                                readonly type: "string";
                            };
                        };
                    };
                };
                readonly message: {
                    readonly description: "To be used in case any error occurs (if success = false). If success = true, it does not exist.";
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const Getpaymentmethods: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly propertyID: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID for the property to be queried";
                };
                readonly lang: {
                    readonly type: "string";
                    readonly enum: readonly ["en", "pt-br", "es"];
                    readonly default: "en";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Language that payment methods name should return (if available).";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly success: {
                    readonly description: "Returns if the request could be completed";
                    readonly type: "boolean";
                };
                readonly data: {
                    readonly description: "";
                    readonly type: "object";
                    readonly properties: {
                        readonly propertyID: {
                            readonly description: "Property ID";
                            readonly type: "string";
                        };
                        readonly methods: {
                            readonly description: "List of active methods enabled";
                            readonly type: "array";
                            readonly items: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly type: {
                                        readonly description: "Payment Type";
                                        readonly type: "string";
                                    };
                                    readonly name: {
                                        readonly description: "Payment Name (in given lang)";
                                        readonly type: "string";
                                    };
                                    readonly cardTypes: {
                                        readonly description: "IF type = 'credit' the enabled card types. Having the array's keys as its type and the value as its name.";
                                        readonly type: "array";
                                        readonly items: {
                                            readonly type: "object";
                                            readonly properties: {
                                                readonly cardCode: {
                                                    readonly description: "";
                                                    readonly type: "string";
                                                };
                                                readonly cardName: {
                                                    readonly description: "";
                                                    readonly type: "string";
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                        };
                        readonly gateway: {
                            readonly description: "Payment Gateway used by property";
                            readonly type: "array";
                            readonly items: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly name: {
                                        readonly description: "Gateway name";
                                        readonly type: "string";
                                    };
                                    readonly currency: {
                                        readonly description: "3 letters iso code";
                                        readonly type: "string";
                                    };
                                };
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const Getpaymentscapabilities: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly propertyID: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID for the property to be queried";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly success: {
                    readonly description: "Returns if the request could be completed";
                    readonly type: "boolean";
                };
                readonly data: {
                    readonly description: "";
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly cloudbedsPayments: {
                                readonly description: "If Cloudbeds Payments is enabled for this property";
                                readonly type: "boolean";
                            };
                            readonly terminal: {
                                readonly description: "If the property has an active terminal";
                                readonly type: "boolean";
                            };
                            readonly tapToPay: {
                                readonly description: "If tap-to-pay is enabled for the property in the backend gateway";
                                readonly type: "boolean";
                            };
                            readonly gateway: {
                                readonly description: "The backend gateway in use for this property";
                                readonly type: "string";
                            };
                            readonly payByLink: {
                                readonly description: "If Pay-by-Link is enabled for the property";
                                readonly type: "boolean";
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const Getrate: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly roomTypeID: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Room Type ID";
                };
                readonly startDate: {
                    readonly type: "string";
                    readonly format: "date";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Check-in date";
                };
                readonly endDate: {
                    readonly type: "string";
                    readonly format: "date";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Check-out date";
                };
                readonly adults: {
                    readonly type: "integer";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Number of adults";
                };
                readonly children: {
                    readonly type: "integer";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Number of children";
                };
                readonly detailedRates: {
                    readonly type: "boolean";
                    readonly default: false;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "If the rates need detailed information";
                };
                readonly promoCode: {
                    readonly type: "boolean";
                    readonly default: false;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Return information for one or more specific rate plans by promo code. This parameter is DEPRECATED and not recommended for usage. Use method getRatePlans instead";
                };
            };
            readonly required: readonly ["roomTypeID", "startDate", "endDate"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly success: {
                    readonly description: "Returns if the request could be completed";
                    readonly type: "boolean";
                };
                readonly data: {
                    readonly description: "Rates details";
                    readonly type: "object";
                    readonly properties: {
                        readonly rateID: {
                            readonly description: "Rate ID";
                            readonly type: "string";
                        };
                        readonly isDerived: {
                            readonly description: "This rate has been derived from another rate";
                            readonly type: "boolean";
                        };
                        readonly roomRate: {
                            readonly description: "Base rate for the room, calculated based on the Room Type ID, selected dates, and promo code. This does not include additional guest charges";
                            readonly type: "number";
                        };
                        readonly totalRate: {
                            readonly description: "Total rate for the room, which includes the base rate (roomRate) plus additional costs for extra guests (adults and children)";
                            readonly type: "number";
                        };
                        readonly roomsAvailable: {
                            readonly description: "Number of rooms available, based on the parameters provided";
                            readonly type: "integer";
                        };
                        readonly daysOfWeek: {
                            readonly description: "";
                            readonly type: "array";
                            readonly items: {
                                readonly type: "string";
                            };
                        };
                        readonly roomRateDetailed: {
                            readonly description: "Detailed information on the rates, if requested";
                            readonly type: "array";
                            readonly items: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly date: {
                                        readonly description: "";
                                        readonly type: "string";
                                        readonly format: "date";
                                    };
                                    readonly rate: {
                                        readonly description: "Base rate for the selected date";
                                        readonly type: "number";
                                    };
                                    readonly totalRate: {
                                        readonly description: "Total rate for the selected date";
                                        readonly type: "number";
                                    };
                                    readonly roomsAvailable: {
                                        readonly description: "Number of rooms available for the selected date";
                                        readonly type: "integer";
                                    };
                                    readonly closedToArrival: {
                                        readonly description: "";
                                        readonly type: "boolean";
                                    };
                                    readonly closedToDeparture: {
                                        readonly description: "";
                                        readonly type: "boolean";
                                    };
                                    readonly minLos: {
                                        readonly description: "Minimum Length Of Stay";
                                        readonly type: "integer";
                                    };
                                    readonly maxLos: {
                                        readonly description: "Maximum Length Of Stay";
                                        readonly type: "integer";
                                    };
                                };
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const Getratejobs: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly jobReferenceID: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Filter Rate Jobs by jobReferenceID";
                };
                readonly status: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Filter Rate Jobs based on status";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly success: {
                    readonly description: "Returns if the request could be completed";
                    readonly type: "boolean";
                };
                readonly hasNextPage: {
                    readonly description: "Returns true if there is another page of results after this one";
                    readonly type: "boolean";
                };
                readonly nextPage: {
                    readonly description: "The URL of the next page of results if there is one";
                    readonly type: "string";
                };
                readonly data: {
                    readonly description: "Job details";
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly jobReferenceID: {
                                readonly description: "Reference ID for the job created for this update.  This can be used to track success of the batch for this rate update. See getRateJobs or the rate:batch_job";
                                readonly type: "string";
                            };
                            readonly dateCreated: {
                                readonly description: "Rate Job creation datetime";
                                readonly type: "string";
                                readonly format: "date";
                            };
                            readonly status: {
                                readonly description: "Status of the Rate Job. in_progress - job is processing. completed - job has completed successfully. error - there was an error with 1 or more updates requested in this job. Allowed values: in_progressgu, completed, error";
                                readonly type: "string";
                            };
                            readonly updates: {
                                readonly description: "Array of actions produced from this job";
                                readonly type: "array";
                                readonly items: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly rateID: {
                                            readonly description: "Rate ID for which action was taken";
                                            readonly type: "string";
                                        };
                                        readonly action: {
                                            readonly description: "Action taken for this interval as part of this job. in_progress - interval wait for it turn. updated - interval was updated. created - new interval was created with the new date range. error - there was an error when attempting this update. Allowed values: in_progress, updated, created, error";
                                            readonly type: "string";
                                        };
                                        readonly startDate: {
                                            readonly description: "Interval start date";
                                            readonly type: "string";
                                            readonly format: "date";
                                        };
                                        readonly endDate: {
                                            readonly description: "Interval end date";
                                            readonly type: "string";
                                            readonly format: "date";
                                        };
                                        readonly rate: {
                                            readonly description: "Value of rate which was updated";
                                            readonly type: "number";
                                        };
                                        readonly maxLos: {
                                            readonly description: "Maximum length of stay for this rate";
                                            readonly type: "integer";
                                        };
                                        readonly minLos: {
                                            readonly description: "Minimum length of stay for this rate";
                                            readonly type: "integer";
                                        };
                                        readonly closedToArrival: {
                                            readonly description: "If this rate is closed to arrival";
                                            readonly type: "boolean";
                                        };
                                        readonly closedToDeparture: {
                                            readonly description: "If this rate is closed to departure";
                                            readonly type: "boolean";
                                        };
                                        readonly cutOff: {
                                            readonly description: "Cutoff for this rate";
                                            readonly type: "integer";
                                        };
                                        readonly lastMinuteBooking: {
                                            readonly description: "Last minute booking for this rate";
                                            readonly type: "integer";
                                        };
                                        readonly message: {
                                            readonly description: "Error message";
                                            readonly type: "string";
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const Getrateplans: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly propertyIDs: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "List of property IDs, comma-separated, i.e. 37,345,89";
                };
                readonly rateIDs: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "List of Rate IDs, comma-separated, i.e. 37,345,89";
                };
                readonly roomTypeID: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "List of Room Type IDs, comma-separated, i.e. 37,345,89";
                };
                readonly promoCode: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "List of Promo Codes, comma-separated, i.e. 37,345,89";
                };
                readonly includePromoCode: {
                    readonly type: "boolean";
                    readonly default: true;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Include rate plans with promo code";
                };
                readonly startDate: {
                    readonly type: "string";
                    readonly format: "date";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Check-in date";
                };
                readonly endDate: {
                    readonly type: "string";
                    readonly format: "date";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Check-out date";
                };
                readonly adults: {
                    readonly type: "integer";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Number of adults";
                };
                readonly children: {
                    readonly type: "integer";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Number of children";
                };
                readonly detailedRates: {
                    readonly type: "boolean";
                    readonly default: false;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "If the rates need detailed information";
                };
            };
            readonly required: readonly ["startDate", "endDate"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly success: {
                    readonly description: "Returns if the request could be completed";
                    readonly type: "boolean";
                };
                readonly data: {
                    readonly description: "Rates details";
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly rateID: {
                                readonly description: "Rate ID";
                                readonly type: "string";
                            };
                            readonly isDerived: {
                                readonly description: "True if this rate is derived from another rate";
                                readonly type: "boolean";
                            };
                            readonly roomRate: {
                                readonly description: "Rate for the room, based on the parameters provided";
                                readonly type: "number";
                            };
                            readonly totalRate: {
                                readonly description: "Total rate for the room, based on the parameters provided. Calculated using base rates and additional costs from extra guests.";
                                readonly type: "number";
                            };
                            readonly roomsAvailable: {
                                readonly description: "Number of rooms available for the selected date";
                                readonly type: "integer";
                            };
                            readonly roomTypeID: {
                                readonly description: "] room type ID (if not specified in request)";
                                readonly type: "string";
                            };
                            readonly roomTypeName: {
                                readonly description: "] room type name (if not specified in request)";
                                readonly type: "integer";
                            };
                            readonly propertyID: {
                                readonly description: "Property ID, used if multiple properties are included in request";
                                readonly type: "string";
                            };
                            readonly ratePlanID: {
                                readonly description: "ratePlanID (If rate depends on plan)";
                                readonly type: "string";
                            };
                            readonly ratePlanNamePublic: {
                                readonly description: "ratePlanNamePublic";
                                readonly type: "string";
                            };
                            readonly ratePlanNamePrivate: {
                                readonly description: "ratePlanNamePrivate";
                                readonly type: "string";
                            };
                            readonly promoCode: {
                                readonly description: "Promotional code when rate plan has has it";
                                readonly type: "string";
                            };
                            readonly derivedType: {
                                readonly description: "type of deriving (only if current rate was derived from other one).\n\n`fixed` `percentage`";
                                readonly type: "string";
                                readonly enum: readonly ["fixed", "percentage"];
                            };
                            readonly derivedValue: {
                                readonly description: "Can be positive or negative (only if current rate was derived from other one).";
                                readonly type: "number";
                            };
                            readonly baseRate: {
                                readonly description: "Base rate on given period";
                                readonly type: "number";
                            };
                            readonly daysOfWeek: {
                                readonly description: "Returns when there is a difference between range given with startDate/endDate and days of week which rate plan applies.";
                                readonly type: "array";
                                readonly items: {
                                    readonly type: "string";
                                    readonly enum: readonly ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
                                    readonly description: "`Sun` `Mon` `Tue` `Wed` `Thu` `Fri` `Sat`";
                                };
                            };
                            readonly addOns: {
                                readonly description: "addOns information on the rates";
                                readonly type: "array";
                                readonly items: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly addOnID: {
                                            readonly description: "addOnID";
                                            readonly type: "string";
                                        };
                                        readonly addOnName: {
                                            readonly description: "addOnName";
                                            readonly type: "string";
                                        };
                                        readonly itemID: {
                                            readonly description: "itemID";
                                            readonly type: "string";
                                        };
                                        readonly itemName: {
                                            readonly description: "itemName";
                                            readonly type: "string";
                                        };
                                    };
                                };
                            };
                            readonly roomRateDetailed: {
                                readonly description: "Detailed information on the rates, if requested";
                                readonly type: "array";
                                readonly items: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly date: {
                                            readonly description: "";
                                            readonly type: "string";
                                            readonly format: "date";
                                        };
                                        readonly rateBase: {
                                            readonly description: "rate for the selected date";
                                            readonly type: "number";
                                        };
                                        readonly totalRate: {
                                            readonly description: "Total rate for the selected date";
                                            readonly type: "number";
                                        };
                                        readonly roomsAvailable: {
                                            readonly description: "Number of rooms available for the selected date";
                                            readonly type: "integer";
                                        };
                                        readonly closedToArrival: {
                                            readonly description: "true if day closed to arrival";
                                            readonly type: "boolean";
                                        };
                                        readonly closedToDeparture: {
                                            readonly description: "true if day closed to departure";
                                            readonly type: "boolean";
                                        };
                                        readonly minLos: {
                                            readonly description: "Minimum Length Of Stay";
                                            readonly type: "integer";
                                        };
                                        readonly maxLos: {
                                            readonly description: "Maximum Length Of Stay";
                                            readonly type: "integer";
                                        };
                                        readonly cutOff: {
                                            readonly description: "";
                                            readonly type: "integer";
                                        };
                                        readonly lastMinuteBooking: {
                                            readonly description: "";
                                            readonly type: "integer";
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
                readonly message: {
                    readonly description: "To be used in case any error occurs (if success = false). If success = true, it does not exist.";
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const Getreservation: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly propertyID: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Property ID";
                };
                readonly reservationID: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Reservation Unique Identifier. Obtained from one of the \"Reservations\" group methods";
                };
                readonly includeGuestRequirements: {
                    readonly type: "boolean";
                    readonly default: false;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Includes guest requirements data in the response.";
                };
            };
            readonly required: readonly ["reservationID"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly success: {
                    readonly description: "Returns if the request could be completed";
                    readonly type: "boolean";
                };
                readonly data: {
                    readonly description: "Details for the reservation queried";
                    readonly type: "object";
                    readonly properties: {
                        readonly propertyID: {
                            readonly description: "Property ID";
                            readonly type: "string";
                        };
                        readonly guestName: {
                            readonly description: "Main Guest Name";
                            readonly type: "string";
                        };
                        readonly guestEmail: {
                            readonly description: "Main Guest Email";
                            readonly type: "string";
                        };
                        readonly isAnonymized: {
                            readonly description: "Flag indicating the main guest data was removed upon request";
                            readonly type: "boolean";
                        };
                        readonly guestList: {
                            readonly description: "A map of guest IDs to guest objects (key is the Guest ID). It contains an entry for each guest included on the reservation.";
                            readonly type: "object";
                            readonly additionalProperties: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly guestID: {
                                        readonly description: "ID of the guest";
                                        readonly type: "string";
                                    };
                                    readonly guestFirstName: {
                                        readonly description: "First Name";
                                        readonly type: "string";
                                    };
                                    readonly guestLastName: {
                                        readonly description: "Last Name";
                                        readonly type: "string";
                                    };
                                    readonly guestGender: {
                                        readonly description: "Gender\n\n`M` `F` `N/A`";
                                        readonly type: "string";
                                        readonly enum: readonly ["M", "F", "N/A"];
                                    };
                                    readonly guestEmail: {
                                        readonly description: "Email Address";
                                        readonly type: "string";
                                    };
                                    readonly guestPhone: {
                                        readonly description: "Phone Number";
                                        readonly type: "string";
                                    };
                                    readonly guestCellPhone: {
                                        readonly description: "Cell Phone Number";
                                        readonly type: "string";
                                    };
                                    readonly guestAddress: {
                                        readonly description: "";
                                        readonly type: "string";
                                    };
                                    readonly guestAddress2: {
                                        readonly description: "";
                                        readonly type: "string";
                                    };
                                    readonly guestCity: {
                                        readonly description: "";
                                        readonly type: "string";
                                    };
                                    readonly guestState: {
                                        readonly description: "";
                                        readonly type: "string";
                                    };
                                    readonly guestCountry: {
                                        readonly description: "";
                                        readonly type: "string";
                                    };
                                    readonly guestZip: {
                                        readonly description: "";
                                        readonly type: "string";
                                    };
                                    readonly guestStatus: {
                                        readonly description: "\n\n`in_progress` `call2confirm` `confirmed` `canceled` `checked_in` `checked_out` `not_confirmed` `no_show` `paypal_init` `pending_payment` `not_checked_in` `in_house`";
                                        readonly type: "string";
                                        readonly enum: readonly ["in_progress", "call2confirm", "confirmed", "canceled", "checked_in", "checked_out", "not_confirmed", "no_show", "paypal_init", "pending_payment", "not_checked_in", "in_house"];
                                    };
                                    readonly guestBirthdate: {
                                        readonly description: "";
                                        readonly oneOf: readonly [{
                                            readonly type: "string";
                                            readonly format: "date";
                                        }, {
                                            readonly type: "string";
                                        }];
                                    };
                                    readonly guestDocumentType: {
                                        readonly description: "";
                                        readonly type: "string";
                                    };
                                    readonly guestDocumentNumber: {
                                        readonly description: "";
                                        readonly type: "string";
                                    };
                                    readonly guestDocumentIssueDate: {
                                        readonly description: "";
                                        readonly oneOf: readonly [{
                                            readonly type: "string";
                                            readonly format: "date";
                                        }, {
                                            readonly type: "string";
                                        }];
                                    };
                                    readonly guestDocumentIssuingCountry: {
                                        readonly description: "";
                                        readonly type: "string";
                                    };
                                    readonly guestDocumentExpirationDate: {
                                        readonly description: "";
                                        readonly oneOf: readonly [{
                                            readonly type: "string";
                                            readonly format: "date";
                                        }, {
                                            readonly type: "string";
                                        }];
                                    };
                                    readonly taxID: {
                                        readonly description: "";
                                        readonly type: "string";
                                    };
                                    readonly companyTaxID: {
                                        readonly description: "";
                                        readonly type: "string";
                                    };
                                    readonly companyName: {
                                        readonly description: "";
                                        readonly type: "string";
                                    };
                                    readonly assignedRoom: {
                                        readonly description: "Returns true if guest has roomed assigned, false if not";
                                        readonly type: "boolean";
                                    };
                                    readonly isAnonymized: {
                                        readonly description: "Flag indicating the guest data was removed upon request";
                                        readonly type: "boolean";
                                    };
                                    readonly roomID: {
                                        readonly description: "Room ID where guest is assigned";
                                        readonly type: "string";
                                    };
                                    readonly roomName: {
                                        readonly description: "Room Name where guest is assigned";
                                        readonly type: "string";
                                    };
                                    readonly roomTypeName: {
                                        readonly description: "Room Type Name where guest is assigned";
                                        readonly type: "string";
                                    };
                                    readonly roomTypeIsVirtual: {
                                        readonly description: "If room is virtual (true) or physical (false)";
                                        readonly type: "boolean";
                                    };
                                    readonly isMainGuest: {
                                        readonly description: "If the guest is the main guest of the reservation or not";
                                        readonly type: "boolean";
                                    };
                                    readonly guestRequirements: {
                                        readonly description: "Guest requirements data. Only included if `includeGuestRequirements=true`.";
                                        readonly type: "array";
                                        readonly items: {
                                            readonly type: "object";
                                            readonly additionalProperties: true;
                                        };
                                    };
                                    readonly customFields: {
                                        readonly description: "List of custom fields";
                                        readonly type: "array";
                                        readonly items: {
                                            readonly type: "object";
                                            readonly properties: {
                                                readonly customFieldName: {
                                                    readonly description: "Custom Field Name";
                                                    readonly type: "string";
                                                };
                                                readonly customFieldValue: {
                                                    readonly description: "Custom Field Value";
                                                    readonly type: "string";
                                                };
                                            };
                                        };
                                    };
                                    readonly rooms: {
                                        readonly description: "List of all rooms that guest is assigned to";
                                        readonly type: "array";
                                        readonly items: {
                                            readonly type: "object";
                                            readonly properties: {
                                                readonly reservationRoomID: {
                                                    readonly description: "Reservation room ID where guest is assigned";
                                                    readonly type: "string";
                                                };
                                                readonly roomID: {
                                                    readonly description: "Room ID where guest is assigned";
                                                    readonly type: "string";
                                                };
                                                readonly roomName: {
                                                    readonly description: "Room Name where guest is assigned";
                                                    readonly type: "string";
                                                };
                                                readonly roomTypeName: {
                                                    readonly description: "Room Type Name where guest is assigned";
                                                    readonly type: "string";
                                                };
                                                readonly roomTypeIsVirtual: {
                                                    readonly description: "If room is virtual (true) or physical (false)";
                                                    readonly type: "boolean";
                                                };
                                                readonly subReservationID: {
                                                    readonly description: "Sub Reservation ID of the specific assigned room";
                                                    readonly type: "string";
                                                };
                                            };
                                        };
                                    };
                                    readonly unassignedRooms: {
                                        readonly description: "List of unassigned rooms";
                                        readonly type: "array";
                                        readonly items: {
                                            readonly type: "object";
                                            readonly properties: {
                                                readonly reservationRoomID: {
                                                    readonly description: "Reservation room ID";
                                                    readonly type: "string";
                                                };
                                                readonly roomTypeID: {
                                                    readonly description: "ID of the assigned room type";
                                                    readonly type: "string";
                                                };
                                                readonly roomTypeName: {
                                                    readonly description: "Room Type Name where guest is assigned";
                                                    readonly type: "string";
                                                };
                                                readonly roomTypeIsVirtual: {
                                                    readonly description: "If room is virtual (true) or physical (false)";
                                                    readonly type: "boolean";
                                                };
                                                readonly subReservationID: {
                                                    readonly description: "Sub Reservation ID of the specific assigned room";
                                                    readonly type: "string";
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                        };
                        readonly reservationID: {
                            readonly description: "Reservation identifier";
                            readonly type: "string";
                        };
                        readonly dateCreated: {
                            readonly description: "";
                            readonly type: "string";
                            readonly format: "date-time";
                        };
                        readonly dateModified: {
                            readonly description: "";
                            readonly type: "string";
                            readonly format: "date-time";
                        };
                        readonly estimatedArrivalTime: {
                            readonly description: "Estimated arrival time, 24-hour format.";
                            readonly type: "string";
                            readonly format: "time";
                        };
                        readonly source: {
                            readonly description: "Booking source (e.g. Website, Facebook Widget, Booking.com, etc)";
                            readonly type: "string";
                        };
                        readonly sourceID: {
                            readonly description: "Booking source unique id";
                            readonly type: "string";
                        };
                        readonly thirdPartyIdentifier: {
                            readonly description: "If it was received from a booking channel, it displays its identifier. If not, it will be empty";
                            readonly type: "string";
                        };
                        readonly status: {
                            readonly description: "Reservation status<br /> 'not_confirmed' - Reservation is pending confirmation<br /> 'confirmed' - Reservation is confirmed<br /> 'canceled' - Reservation is canceled<br /> 'checked_in' - Guest is in hotel<br /> 'checked_out' - Guest already left hotel<br /> 'no_show' - Guest didn't showed up on check-in date\n\n`confirmed` `not_confirmed` `canceled` `checked_in` `checked_out` `no_show`";
                            readonly type: "string";
                            readonly enum: readonly ["confirmed", "not_confirmed", "canceled", "checked_in", "checked_out", "no_show"];
                        };
                        readonly total: {
                            readonly description: "Total price of the booking";
                            readonly type: "number";
                        };
                        readonly balance: {
                            readonly description: "Balance currently owed";
                            readonly type: "number";
                        };
                        readonly balanceDetailed: {
                            readonly description: "Reservation balance detailed with the information available on PC app, describing the financial items calculated";
                            readonly oneOf: readonly [{
                                readonly type: "object";
                                readonly properties: {
                                    readonly suggestedDeposit: {
                                        readonly description: "Suggested deposit value, calculated according to the hotel policies. Does not mean that it was effectively paid";
                                        readonly type: "string";
                                    };
                                    readonly subTotal: {
                                        readonly description: "Sum of the room prices on the reservation";
                                        readonly type: "number";
                                    };
                                    readonly additionalItems: {
                                        readonly description: "Sum of the additional items recorded on the reservation";
                                        readonly type: "number";
                                    };
                                    readonly taxesFees: {
                                        readonly description: "Sum of the taxes and fees calculated on the reservation";
                                        readonly type: "number";
                                    };
                                    readonly grandTotal: {
                                        readonly description: "Sum of sub.Total + additionalItems + taxesFees";
                                        readonly type: "number";
                                    };
                                    readonly paid: {
                                        readonly description: "Amount paid (reservation deposit + any other extra payment)";
                                        readonly type: "number";
                                    };
                                };
                            }, {
                                readonly type: "array";
                                readonly items: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly suggestedDeposit: {
                                            readonly description: "Suggested deposit value, calculated according to the hotel policies. Does not mean that it was effectively paid";
                                            readonly type: "string";
                                        };
                                        readonly subTotal: {
                                            readonly description: "Sum of the room prices on the reservation";
                                            readonly type: "number";
                                        };
                                        readonly additionalItems: {
                                            readonly description: "Sum of the additional items recorded on the reservation";
                                            readonly type: "number";
                                        };
                                        readonly taxesFees: {
                                            readonly description: "Sum of the taxes and fees calculated on the reservation";
                                            readonly type: "number";
                                        };
                                        readonly grandTotal: {
                                            readonly description: "Sum of sub.Total + additionalItems + taxesFees";
                                            readonly type: "number";
                                        };
                                        readonly paid: {
                                            readonly description: "Amount paid (reservation deposit + any other extra payment)";
                                            readonly type: "number";
                                        };
                                    };
                                };
                            }];
                        };
                        readonly assigned: {
                            readonly description: "Assigned Rooms information";
                            readonly type: "array";
                            readonly items: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly reservationRoomID: {
                                        readonly description: "Reservation room ID";
                                        readonly type: "string";
                                    };
                                    readonly roomTypeName: {
                                        readonly description: "Name of the assigned room type";
                                        readonly type: "string";
                                    };
                                    readonly roomTypeNameShort: {
                                        readonly description: "Short name of the assigned room type";
                                        readonly type: "string";
                                    };
                                    readonly roomTypeIsVirtual: {
                                        readonly description: "If room is virtual (true) or physical (false)";
                                        readonly type: "boolean";
                                    };
                                    readonly dormRoomName: {
                                        readonly description: "Name of the dorm room. Used for the shared dorm beds that are organized into rooms within the same room type";
                                        readonly type: "string";
                                    };
                                    readonly roomTypeID: {
                                        readonly description: "ID of the assigned room type";
                                        readonly type: "string";
                                    };
                                    readonly subReservationID: {
                                        readonly description: "Sub Reservation ID of the specific assigned room";
                                        readonly type: "string";
                                    };
                                    readonly roomName: {
                                        readonly description: "Name of the specific assigned room";
                                        readonly type: "string";
                                    };
                                    readonly roomID: {
                                        readonly description: "ID of the specific assigned room";
                                        readonly type: "string";
                                    };
                                    readonly startDate: {
                                        readonly description: "Check-In date of the room";
                                        readonly type: "string";
                                        readonly format: "date";
                                    };
                                    readonly endDate: {
                                        readonly description: "Check-Out date of the room";
                                        readonly type: "string";
                                        readonly format: "date";
                                    };
                                    readonly adults: {
                                        readonly description: "Number of adult staying in the room";
                                        readonly type: "string";
                                    };
                                    readonly children: {
                                        readonly description: "Number of children staying in the room";
                                        readonly type: "string";
                                    };
                                    readonly dailyRates: {
                                        readonly description: "Array with rates detailed by day";
                                        readonly type: "array";
                                        readonly items: {
                                            readonly type: "object";
                                            readonly properties: {
                                                readonly date: {
                                                    readonly description: "";
                                                    readonly type: "string";
                                                    readonly format: "date";
                                                };
                                                readonly rate: {
                                                    readonly description: "";
                                                    readonly type: "number";
                                                };
                                            };
                                        };
                                    };
                                    readonly roomTotal: {
                                        readonly description: "Room total rate";
                                        readonly type: "string";
                                    };
                                    readonly marketName: {
                                        readonly description: "Market segmentation name";
                                        readonly type: "string";
                                    };
                                    readonly marketCode: {
                                        readonly description: "Market segmentation code";
                                        readonly type: "string";
                                    };
                                };
                            };
                        };
                        readonly unassigned: {
                            readonly description: "Unassigned Rooms information";
                            readonly type: "array";
                            readonly items: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly reservationRoomID: {
                                        readonly description: "Reservation room ID";
                                        readonly type: "string";
                                    };
                                    readonly roomTypeName: {
                                        readonly description: "Name of the room type to be assigned";
                                        readonly type: "string";
                                    };
                                    readonly roomTypeIsVirtual: {
                                        readonly description: "If room is virtual (true) or physical (false)";
                                        readonly type: "boolean";
                                    };
                                    readonly roomTypeID: {
                                        readonly description: "ID of the room type to be assigned";
                                        readonly type: "string";
                                    };
                                    readonly subReservationID: {
                                        readonly description: "Sub Reservation ID of the specific assigned room";
                                        readonly type: "string";
                                    };
                                    readonly startDate: {
                                        readonly description: "Check-In date of the room";
                                        readonly type: "string";
                                        readonly format: "date";
                                    };
                                    readonly endDate: {
                                        readonly description: "Check-Out date of the room";
                                        readonly type: "string";
                                        readonly format: "date";
                                    };
                                    readonly adults: {
                                        readonly description: "Number of adult staying in the room";
                                        readonly type: "string";
                                    };
                                    readonly children: {
                                        readonly description: "Number of children staying in the room";
                                        readonly type: "string";
                                    };
                                    readonly dailyRates: {
                                        readonly description: "Array with rates detailed by day";
                                        readonly type: "array";
                                        readonly items: {
                                            readonly type: "object";
                                            readonly properties: {
                                                readonly date: {
                                                    readonly description: "";
                                                    readonly type: "string";
                                                    readonly format: "date";
                                                };
                                                readonly rate: {
                                                    readonly description: "";
                                                    readonly type: "number";
                                                };
                                            };
                                        };
                                    };
                                    readonly roomTotal: {
                                        readonly description: "Room total rate";
                                        readonly type: "string";
                                    };
                                };
                            };
                        };
                        readonly cardsOnFile: {
                            readonly description: "Credit Cards stored for the reservation";
                            readonly type: "array";
                            readonly items: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly cardID: {
                                        readonly description: "Credit Card ID, used for card operations";
                                        readonly type: "string";
                                    };
                                    readonly cardNumber: {
                                        readonly description: "Ending digits of the credit card";
                                        readonly type: "string";
                                    };
                                    readonly cardType: {
                                        readonly description: "Abbreviated name of credit card type\n\n`visa` `master` `amex` `diners`";
                                        readonly type: "string";
                                        readonly enum: readonly ["visa", "master", "amex", "diners"];
                                    };
                                };
                            };
                        };
                        readonly customFields: {
                            readonly description: "Custom Fields related to the reservation";
                            readonly type: "array";
                            readonly items: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly customFieldName: {
                                        readonly description: "Custom Field Name";
                                        readonly type: "string";
                                    };
                                    readonly customFieldValue: {
                                        readonly description: "Custom Field Value";
                                        readonly type: "string";
                                    };
                                };
                            };
                        };
                        readonly startDate: {
                            readonly description: "First reservation check-in date";
                            readonly type: "string";
                            readonly format: "date";
                        };
                        readonly endDate: {
                            readonly description: "Last reservation check-out date";
                            readonly type: "string";
                            readonly format: "date";
                        };
                        readonly allotmentBlockCode: {
                            readonly description: "Allotment block code";
                            readonly type: "string";
                        };
                        readonly channelProvidedCreditCard: {
                            readonly description: "Whether a credit card was provided by the channel. Only included for reservations originating from OTAs.";
                            readonly type: "boolean";
                        };
                        readonly groupInventory: {
                            readonly description: "Aggregate allotment block information";
                            readonly type: "array";
                            readonly items: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly subReservationID: {
                                        readonly description: "Sub Reservation ID of the specific assigned room";
                                        readonly type: "string";
                                    };
                                    readonly allotmentBlockCode: {
                                        readonly description: "Allotment block code";
                                        readonly type: "string";
                                    };
                                    readonly startDate: {
                                        readonly description: "Check-In date of the room";
                                        readonly type: "string";
                                        readonly format: "date";
                                    };
                                    readonly endDate: {
                                        readonly description: "Check-Out date of the room";
                                        readonly type: "string";
                                        readonly format: "date";
                                    };
                                };
                            };
                        };
                        readonly origin: {
                            readonly description: "Reservation origin";
                            readonly type: "string";
                        };
                        readonly mealPlans: {
                            readonly description: "Reservation Meal Plans";
                            readonly type: "string";
                        };
                    };
                };
                readonly message: {
                    readonly description: "To be used in case any error occurs (if success = false). If success = true, it does not exist.";
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const Getreservationassignments: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly propertyID: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Property ID";
                };
                readonly date: {
                    readonly type: "string";
                    readonly format: "date";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Date selected to get the assignments. If no date is passed, it will return the results for the current day.";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly success: {
                    readonly description: "Returns if the request could be completed";
                    readonly type: "boolean";
                };
                readonly data: {
                    readonly description: "Details for the rooms assigned on the selected date";
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly guestName: {
                                readonly description: "Guest Name";
                                readonly type: "string";
                            };
                            readonly reservationID: {
                                readonly description: "Reservation identifier, used for all query operations";
                                readonly type: "string";
                            };
                            readonly unassigned: {
                                readonly description: "Number of rooms unassigned";
                                readonly type: "integer";
                            };
                            readonly assigned: {
                                readonly description: "Assigned Rooms information. May not exist if no room is assigned.";
                                readonly type: "array";
                                readonly items: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly roomTypeID: {
                                            readonly description: "ID of the room type assigned";
                                            readonly type: "string";
                                        };
                                        readonly roomTypeName: {
                                            readonly description: "Name of the room type assigned";
                                            readonly type: "string";
                                        };
                                        readonly roomTypeNameShort: {
                                            readonly description: "Short name of the room type assigned";
                                            readonly type: "string";
                                        };
                                        readonly dormRoomName: {
                                            readonly description: "Name of the dorm room. Used for the shared dorm beds that are organized into rooms within the same room type";
                                            readonly type: "string";
                                        };
                                        readonly roomName: {
                                            readonly description: "Name of the specific room assigned";
                                            readonly type: "string";
                                        };
                                        readonly roomID: {
                                            readonly description: "ID of the specific room assigned";
                                            readonly type: "string";
                                        };
                                        readonly subReservationID: {
                                            readonly description: "Associated subReservation ID (specific to room)";
                                            readonly type: "string";
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
                readonly message: {
                    readonly description: "To be used in case any error occurs (if success = false). If success = true, it does not exist.";
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const Getreservationinvoiceinformation: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly propertyID: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Property ID";
                };
                readonly reservationID: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Reservation Unique Identifier";
                };
            };
            readonly required: readonly ["reservationID"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly success: {
                    readonly description: "Returns if the request could be completed";
                    readonly type: "boolean";
                };
                readonly data: {
                    readonly description: "Details for the rooms assigned on the selected date";
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly status: {
                                readonly description: "Reservation status<br /> 'not_confirmed' - Reservation is pending confirmation<br /> 'confirmed' - Reservation is confirmed<br /> 'canceled' - Reservation is canceled<br /> 'checked_in' - Guest is in hotel<br /> 'checked_out' - Guest already left hotel<br /> 'no_show' - Guest didn't showed up on check-in date\n\n`confirmed` `not_confirmed` `canceled` `checked_in` `checked_out` `no_show`";
                                readonly type: "string";
                                readonly enum: readonly ["confirmed", "not_confirmed", "canceled", "checked_in", "checked_out", "no_show"];
                            };
                            readonly customFields: {
                                readonly description: "Custom Fields related to the reservation";
                                readonly type: "array";
                                readonly items: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly customFieldName: {
                                            readonly description: "Custom Field Name";
                                            readonly type: "string";
                                        };
                                        readonly customFieldValue: {
                                            readonly description: "Custom Field Value";
                                            readonly type: "string";
                                        };
                                    };
                                };
                            };
                            readonly mainGuestDetails: {
                                readonly description: "Details for the main guest of the reservation";
                                readonly type: "array";
                                readonly items: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly guestFirstName: {
                                            readonly description: "First Name";
                                            readonly type: "string";
                                        };
                                        readonly guestLastName: {
                                            readonly description: "Last Name";
                                            readonly type: "string";
                                        };
                                        readonly guestGender: {
                                            readonly description: "Gender\n\n`M` `F` `N/A`";
                                            readonly type: "string";
                                            readonly enum: readonly ["M", "F", "N/A"];
                                        };
                                        readonly guestEmail: {
                                            readonly description: "Email Address";
                                            readonly type: "string";
                                        };
                                        readonly guestPhone: {
                                            readonly description: "Phone Number";
                                            readonly type: "string";
                                        };
                                        readonly guestCellPhone: {
                                            readonly description: "Cell Phone Number";
                                            readonly type: "string";
                                        };
                                        readonly guestAddress: {
                                            readonly description: "Adress";
                                            readonly type: "string";
                                        };
                                        readonly guestAddress2: {
                                            readonly description: "Address Line 2 (Complement)";
                                            readonly type: "string";
                                        };
                                        readonly guestCity: {
                                            readonly description: "City";
                                            readonly type: "string";
                                        };
                                        readonly guestCountry: {
                                            readonly description: "Country";
                                            readonly type: "string";
                                        };
                                        readonly taxID: {
                                            readonly description: "Guest Tax Identifier Number";
                                            readonly type: "string";
                                        };
                                        readonly companyTaxID: {
                                            readonly description: "Company Tax Identifier Number";
                                            readonly type: "string";
                                        };
                                        readonly companyName: {
                                            readonly description: "Company Name";
                                            readonly type: "string";
                                        };
                                        readonly guestState: {
                                            readonly description: "State";
                                            readonly type: "string";
                                        };
                                        readonly guestZip: {
                                            readonly description: "Zip code";
                                            readonly type: "string";
                                        };
                                        readonly isAnonymyzed: {
                                            readonly description: "Flag indicating the guest data was removed upon request";
                                            readonly type: "boolean";
                                        };
                                    };
                                };
                            };
                            readonly reservationRooms: {
                                readonly description: "Booked rooms information";
                                readonly type: "array";
                                readonly items: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly roomTypeName: {
                                            readonly description: "Room type name";
                                            readonly type: "string";
                                        };
                                        readonly guestName: {
                                            readonly description: "Assigned guest name";
                                            readonly type: "string";
                                        };
                                        readonly startDate: {
                                            readonly description: "Check-in date";
                                            readonly type: "string";
                                            readonly format: "date";
                                        };
                                        readonly endDate: {
                                            readonly description: "Check-out date";
                                            readonly type: "string";
                                            readonly format: "date";
                                        };
                                        readonly adults: {
                                            readonly description: "Number of adults for the room";
                                            readonly type: "integer";
                                        };
                                        readonly children: {
                                            readonly description: "Number of children for the room";
                                            readonly type: "integer";
                                        };
                                        readonly nights: {
                                            readonly description: "Number of nights";
                                            readonly type: "integer";
                                        };
                                        readonly roomTotal: {
                                            readonly description: "Total rate for the room";
                                            readonly type: "number";
                                        };
                                        readonly roomID: {
                                            readonly description: "Unique ID of the room";
                                            readonly type: "string";
                                        };
                                        readonly roomName: {
                                            readonly description: "Name of the room";
                                            readonly type: "string";
                                        };
                                        readonly roomTypeID: {
                                            readonly description: "ID of the room type";
                                            readonly type: "string";
                                        };
                                        readonly marketName: {
                                            readonly description: "Market segmentation name";
                                            readonly type: "string";
                                        };
                                        readonly marketCode: {
                                            readonly description: "Market segmentation code";
                                            readonly type: "string";
                                        };
                                    };
                                };
                            };
                            readonly reservationRoomsTotal: {
                                readonly description: "Total rates for all rooms";
                                readonly type: "number";
                            };
                            readonly reservationAdjustments: {
                                readonly description: "Adjustments applied to the reservation";
                                readonly type: "array";
                                readonly items: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly adjustmentDescription: {
                                            readonly description: "Description";
                                            readonly type: "string";
                                        };
                                        readonly adjustmentRoomName: {
                                            readonly description: "Room name";
                                            readonly type: "string";
                                        };
                                        readonly adjustmentDateTime: {
                                            readonly description: "Date and time of the adjustment";
                                            readonly type: "string";
                                            readonly format: "date-time";
                                        };
                                        readonly adjustmentDateTimeUTC: {
                                            readonly description: "Date and time of the adjustment (UTC)";
                                            readonly type: "string";
                                            readonly format: "date-time";
                                        };
                                        readonly adjustmentAmount: {
                                            readonly description: "Amount";
                                            readonly type: "number";
                                        };
                                    };
                                };
                            };
                            readonly reservationAdjustmentsTotal: {
                                readonly description: "Total sum of adjustments";
                                readonly type: "number";
                            };
                            readonly reservationPayments: {
                                readonly description: "Payments made for this reservation";
                                readonly type: "array";
                                readonly items: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly paymentType: {
                                            readonly description: "Type";
                                            readonly type: "string";
                                        };
                                        readonly paymentDescription: {
                                            readonly description: "Description";
                                            readonly type: "string";
                                        };
                                        readonly paymentDateTime: {
                                            readonly description: "Date and time of the payment";
                                            readonly type: "string";
                                            readonly format: "date-time";
                                        };
                                        readonly paymentDateTimeUTC: {
                                            readonly description: "Date and time of the payment (UTC)";
                                            readonly type: "string";
                                            readonly format: "date-time";
                                        };
                                        readonly paymentAmount: {
                                            readonly description: "Amount";
                                            readonly type: "number";
                                        };
                                        readonly reservationPaymentsTotal: {
                                            readonly description: "Total sum of payments";
                                            readonly type: "number";
                                        };
                                    };
                                };
                            };
                            readonly reservationAdditionalProducts: {
                                readonly description: "Additional items (products or services)";
                                readonly type: "array";
                                readonly items: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly productID: {
                                            readonly description: "Internal product ID";
                                            readonly type: "string";
                                        };
                                        readonly soldProductID: {
                                            readonly description: "ID of the sold product";
                                            readonly type: "string";
                                        };
                                        readonly itemCode: {
                                            readonly description: "Code of the item";
                                            readonly type: "string";
                                        };
                                        readonly productName: {
                                            readonly description: "Name";
                                            readonly type: "string";
                                        };
                                        readonly productPrice: {
                                            readonly description: "Price";
                                            readonly type: "number";
                                        };
                                        readonly productQuantity: {
                                            readonly description: "Quantity sold";
                                            readonly type: "integer";
                                        };
                                        readonly productSubTotal: {
                                            readonly description: "Gross amount";
                                            readonly type: "number";
                                        };
                                        readonly productFees: {
                                            readonly description: "Fees charged for this item";
                                            readonly type: "number";
                                        };
                                        readonly productTaxes: {
                                            readonly description: "Taxes charged for this item";
                                            readonly type: "number";
                                        };
                                        readonly productTotal: {
                                            readonly description: "Net amount";
                                            readonly type: "number";
                                        };
                                        readonly productNote: {
                                            readonly description: "Product note";
                                            readonly type: "number";
                                        };
                                        readonly transactionDateTime: {
                                            readonly description: "Date and time of the sale";
                                            readonly type: "string";
                                            readonly format: "date-time";
                                        };
                                    };
                                };
                            };
                            readonly reservationAdditionalProductsTotal: {
                                readonly description: "Total sum for additional items";
                                readonly type: "number";
                            };
                            readonly reservationAddOnProducts: {
                                readonly description: "Addons";
                                readonly type: "array";
                                readonly items: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly soldProductID: {
                                            readonly description: "ID of the sold product";
                                            readonly type: "string";
                                        };
                                        readonly productName: {
                                            readonly description: "Name";
                                            readonly type: "string";
                                        };
                                        readonly productPrice: {
                                            readonly description: "Price";
                                            readonly type: "number";
                                        };
                                        readonly productQuantity: {
                                            readonly description: "Quantity sold";
                                            readonly type: "integer";
                                        };
                                        readonly productSubTotal: {
                                            readonly description: "Gross amount";
                                            readonly type: "number";
                                        };
                                        readonly productFees: {
                                            readonly description: "Fees charged for this addon";
                                            readonly type: "number";
                                        };
                                        readonly productTaxes: {
                                            readonly description: "Taxes charged for this addon";
                                            readonly type: "number";
                                        };
                                        readonly productTotal: {
                                            readonly description: "Net amount";
                                            readonly type: "number";
                                        };
                                        readonly transactionDateTime: {
                                            readonly description: "Date and time of the sale";
                                            readonly type: "string";
                                            readonly format: "date-time";
                                        };
                                    };
                                };
                            };
                            readonly reservationAddOnProductsTotal: {
                                readonly description: "Total sum for addons";
                                readonly type: "number";
                            };
                            readonly reservationTaxes: {
                                readonly description: "Taxes";
                                readonly type: "array";
                                readonly items: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly taxName: {
                                            readonly description: "Name";
                                            readonly type: "string";
                                        };
                                        readonly taxAmount: {
                                            readonly description: "Amount";
                                            readonly type: "number";
                                        };
                                    };
                                };
                            };
                            readonly reservationTaxesTotal: {
                                readonly description: "Total sum for taxes";
                                readonly type: "number";
                            };
                            readonly reservationFees: {
                                readonly description: "Fees";
                                readonly type: "array";
                                readonly items: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly taxName: {
                                            readonly description: "Name";
                                            readonly type: "string";
                                        };
                                        readonly taxAmount: {
                                            readonly description: "Amount";
                                            readonly type: "number";
                                        };
                                    };
                                };
                            };
                            readonly reservationFeesTotal: {
                                readonly description: "Total sum for fees";
                                readonly type: "number";
                            };
                            readonly balance: {
                                readonly description: "Balance currently owed";
                                readonly type: "number";
                            };
                            readonly balanceDetailed: {
                                readonly description: "Reservation balance detailed with the information available on PC app, describing the financial items calculated";
                                readonly type: "array";
                                readonly items: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly suggestedDeposit: {
                                            readonly description: "Suggested deposit value, calculated according to the hotel policies. Does not mean that it was effectively paid";
                                            readonly type: "string";
                                        };
                                        readonly subTotal: {
                                            readonly description: "Sum of the room prices on the reservation";
                                            readonly type: "number";
                                        };
                                        readonly additionalItems: {
                                            readonly description: "Sum of the additional items recorded on the reservation";
                                            readonly type: "number";
                                        };
                                        readonly taxesFees: {
                                            readonly description: "Sum of taxes and fees on the reservation";
                                            readonly type: "number";
                                        };
                                        readonly grandTotal: {
                                            readonly description: "Sum of sub.Total + additionalItems + taxesFees";
                                            readonly type: "number";
                                        };
                                        readonly paid: {
                                            readonly description: "Amount paid (reservation deposit + any other extra payment)";
                                            readonly type: "number";
                                        };
                                        readonly originalCurrencyCode: {
                                            readonly description: "The currency the booking was originally made in. Included only if different from property currency";
                                            readonly type: "string";
                                        };
                                        readonly originalCurrencyRate: {
                                            readonly description: "The currency conversion rate used at the time of booking. Included only if originalCurrencyCode is different from property currency.";
                                            readonly type: "number";
                                        };
                                    };
                                };
                            };
                            readonly reservationOrigin: {
                                readonly description: "Reservation Origin";
                                readonly type: "string";
                            };
                            readonly reservationMealPlans: {
                                readonly description: "Reservation Meal Plans";
                                readonly type: "string";
                            };
                        };
                    };
                };
                readonly message: {
                    readonly description: "To be used in case any error occurs (if success = false). If success = true, it does not exist.";
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const Getreservationnotes: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly propertyID: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Property ID";
                };
                readonly reservationID: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Reservation Unique Identifier";
                };
            };
            readonly required: readonly ["reservationID"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly success: {
                    readonly description: "Returns if the request could be completed";
                    readonly type: "boolean";
                };
                readonly data: {
                    readonly description: "Details for the notes on that reservation";
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly reservationNoteID: {
                                readonly description: "Reservation note ID";
                                readonly type: "string";
                            };
                            readonly userName: {
                                readonly description: "User Name";
                                readonly type: "string";
                            };
                            readonly dateCreated: {
                                readonly description: "Creation datetime";
                                readonly type: "string";
                                readonly format: "date-time";
                            };
                            readonly dateModified: {
                                readonly description: "Last modification datetime";
                                readonly type: "string";
                                readonly format: "date-time";
                            };
                            readonly reservationNote: {
                                readonly description: "Note content";
                                readonly type: "string";
                            };
                        };
                    };
                };
                readonly message: {
                    readonly description: "To be used in case any error occurs (if success = false). If success = true, it does not exist.";
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const Getreservationroomdetails: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly propertyID: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Property ID";
                };
                readonly subReservationID: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Sub Reservation ID of the specific assigned room";
                };
            };
            readonly required: readonly ["subReservationID"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly success: {
                    readonly description: "Returns if the request could be completed";
                    readonly type: "boolean";
                };
                readonly message: {
                    readonly description: "To be used in case any error occurs (if success = false). If success = true, it does not exist.";
                    readonly type: "string";
                };
                readonly data: {
                    readonly description: "Details for the rooms assigned on the selected date";
                    readonly type: "object";
                    readonly properties: {
                        readonly reservationID: {
                            readonly description: "Reservation Unique Identifier.";
                            readonly type: "string";
                        };
                        readonly subReservationID: {
                            readonly description: "Subreservation Unique Identifier";
                            readonly type: "string";
                        };
                        readonly roomID: {
                            readonly description: "ID of room assigned";
                            readonly type: "string";
                        };
                        readonly roomName: {
                            readonly description: "Name of room assigned";
                            readonly type: "string";
                        };
                        readonly dormRoomName: {
                            readonly description: "Name of the dorm room. Used for the shared dorm beds that are organized into rooms within the same room type.";
                            readonly type: "string";
                        };
                        readonly guestID: {
                            readonly description: "Guest Identifier";
                            readonly type: "string";
                        };
                        readonly guestName: {
                            readonly description: "Guest Name";
                            readonly type: "string";
                        };
                        readonly roomStatus: {
                            readonly description: "Room status<br /> 'cancelled' - Reservation with this room was canceled<br /> 'checked_out' - Guest already left the room<br /> 'in_house' - Guest is in the room<br /> 'not_checked_in' - Guest isn't checked-in yet\n\n`cancelled` `checked_out` `in_house` `not_checked_in`";
                            readonly type: "string";
                            readonly enum: readonly ["cancelled", "checked_out", "in_house", "not_checked_in"];
                        };
                        readonly roomTypeID: {
                            readonly description: "ID of room type assigned";
                            readonly type: "string";
                        };
                        readonly roomTypeName: {
                            readonly description: "Name of room type assigned";
                            readonly type: "string";
                        };
                        readonly roomTypeIsVirtual: {
                            readonly description: "If room is virtual (true) or physical (false)";
                            readonly type: "boolean";
                        };
                        readonly maxGuests: {
                            readonly description: "Maximum number of guests that room type permits";
                            readonly type: "integer";
                        };
                        readonly adults: {
                            readonly description: "Number of adults registered to room (this does not mean there will be this number of guests in guests array)";
                            readonly type: "integer";
                        };
                        readonly children: {
                            readonly description: "Number of children registered to room (this does not mean there will be this number of guests in guests array)";
                            readonly type: "integer";
                        };
                        readonly guests: {
                            readonly description: "Array with all guests assigned to room";
                            readonly type: "array";
                            readonly items: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly guestID: {
                                        readonly description: "ID of assigned guest";
                                        readonly type: "string";
                                    };
                                    readonly guestFirstName: {
                                        readonly description: "First name of assigned guest";
                                        readonly type: "string";
                                    };
                                    readonly guestLastName: {
                                        readonly description: "Last of assigned guest";
                                        readonly type: "string";
                                    };
                                    readonly isMainGuest: {
                                        readonly description: "If guest is reservation's main guest";
                                        readonly type: "boolean";
                                    };
                                };
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const Getreservations: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly propertyID: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID for the properties to be queried (comma-separated, i.e. 37,345,89).<br /> It can be omitted if the API key is single-property, or to get results from all properties on an association.";
                };
                readonly status: {
                    readonly type: "string";
                    readonly enum: readonly ["not_confirmed", "confirmed", "canceled", "checked_in", "checked_out", "no_show"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Filter by current reservation status";
                };
                readonly resultsFrom: {
                    readonly type: "string";
                    readonly format: "date-time";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Inferior limit datetime, used to filter reservations, based on booking date";
                };
                readonly resultsTo: {
                    readonly type: "string";
                    readonly format: "date-time";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Superior limit datetime, used to filter reservations, based on booking date";
                };
                readonly modifiedFrom: {
                    readonly type: "string";
                    readonly format: "date-time";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Inferior limit datetime, used to filter reservations, based on booking modification date";
                };
                readonly modifiedTo: {
                    readonly type: "string";
                    readonly format: "date-time";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Superior limit datetime, used to filter reservations, based on booking modification date";
                };
                readonly checkInFrom: {
                    readonly type: "string";
                    readonly format: "date";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Filters reservations result to return only reservations with check-in date range starting on this date";
                };
                readonly checkInTo: {
                    readonly type: "string";
                    readonly format: "date";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Filters reservations result to return only reservations with check-in date range ending on this date";
                };
                readonly checkOutFrom: {
                    readonly type: "string";
                    readonly format: "date";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Filters reservations result to return only reservations with check-out date range starting on this date";
                };
                readonly checkOutTo: {
                    readonly type: "string";
                    readonly format: "date";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Filters reservations result to return only reservations with check-out date range ending on this date";
                };
                readonly datesQueryMode: {
                    readonly type: "string";
                    readonly enum: readonly ["booking", "rooms"];
                    readonly default: "booking";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "If we should consider the booking's check-in/check-out dates or the start and end dates for the associated rooms.";
                };
                readonly roomID: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Filters reservation with the supplied room ID. CheckIn/checkOut dates OR status are required. If dates are provided and span more than one day, more than one reservation can be returned. If roomID supplied, roomName is ignored.";
                };
                readonly roomName: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Filters reservation with the supplied room name (customizable by each property). CheckIn/checkOut dates OR status are required. If dates are provided and span more than one day, more than one reservation can be returned.";
                };
                readonly includeGuestsDetails: {
                    readonly type: "boolean";
                    readonly default: false;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "If guests details should be included or not";
                };
                readonly includeGuestRequirements: {
                    readonly type: "boolean";
                    readonly default: false;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Includes guest requirements data in the response. Requires `includeGuestsDetails=true`.";
                };
                readonly includeCustomFields: {
                    readonly type: "boolean";
                    readonly default: false;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "If reservation custom fields should be included or not";
                };
                readonly includeAllRooms: {
                    readonly type: "boolean";
                    readonly default: false;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "When specified, the response will include an additional rooms field that combines both unassigned and assigned rooms.";
                };
                readonly sourceId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Filters reservation with the supplied source ID.";
                };
                readonly sourceReservationId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Filters reservation with the supplied reservation source ID.";
                };
                readonly ratePlanId: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Filters reservation with the supplied rate plan ID.";
                };
                readonly firstName: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Filters reservation with the supplied primary guest first name.";
                };
                readonly lastName: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Filters reservation with the supplied primary guest last name.";
                };
                readonly guestID: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Filters reservation with the supplied Guest ID (Including additional guests).";
                };
                readonly sortByRecent: {
                    readonly type: "boolean";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Sort response results by most recent action";
                };
                readonly pageNumber: {
                    readonly type: "integer";
                    readonly default: 1;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Results page number";
                };
                readonly pageSize: {
                    readonly type: "integer";
                    readonly default: 100;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Results page size. Max = 100";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly success: {
                    readonly description: "Returns if the request could be completed";
                    readonly type: "boolean";
                };
                readonly data: {
                    readonly description: "Details for the reservation queried";
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly propertyID: {
                                readonly description: "Properties identifier";
                                readonly type: "string";
                            };
                            readonly reservationID: {
                                readonly description: "Reservation's unique identifier";
                                readonly type: "string";
                            };
                            readonly dateCreated: {
                                readonly description: "";
                                readonly type: "string";
                                readonly format: "date-time";
                            };
                            readonly dateModified: {
                                readonly description: "";
                                readonly type: "string";
                                readonly format: "date-time";
                            };
                            readonly status: {
                                readonly description: "\n\n`not_confirmed` `confirmed` `canceled` `checked_in` `checked_out` `no_show`";
                                readonly type: "string";
                                readonly enum: readonly ["not_confirmed", "confirmed", "canceled", "checked_in", "checked_out", "no_show"];
                            };
                            readonly guestID: {
                                readonly description: "";
                                readonly type: "string";
                            };
                            readonly profileID: {
                                readonly description: "";
                                readonly type: "string";
                            };
                            readonly guestName: {
                                readonly description: "";
                                readonly type: "string";
                            };
                            readonly startDate: {
                                readonly description: "";
                                readonly type: "string";
                                readonly format: "date";
                            };
                            readonly endDate: {
                                readonly description: "";
                                readonly type: "string";
                                readonly format: "date";
                            };
                            readonly allotmentBlockCode: {
                                readonly description: "Allotment block code";
                                readonly type: "string";
                            };
                            readonly adults: {
                                readonly description: "";
                                readonly type: "integer";
                            };
                            readonly children: {
                                readonly description: "";
                                readonly type: "integer";
                            };
                            readonly balance: {
                                readonly description: "";
                                readonly type: "number";
                            };
                            readonly sourceName: {
                                readonly description: "Source of reservation";
                                readonly type: "string";
                            };
                            readonly sourceID: {
                                readonly description: "Booking source unique id";
                                readonly type: "string";
                            };
                            readonly thirdPartyIdentifier: {
                                readonly description: "";
                                readonly type: "string";
                            };
                            readonly groupInventory: {
                                readonly description: "Aggregate allotment block information";
                                readonly type: "array";
                                readonly items: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly subReservationID: {
                                            readonly description: "Sub Reservation ID of the specific assigned room";
                                            readonly type: "string";
                                        };
                                        readonly allotmentBlockCode: {
                                            readonly description: "Allotment block code";
                                            readonly type: "string";
                                        };
                                        readonly startDate: {
                                            readonly description: "Check-In date of the room";
                                            readonly type: "string";
                                            readonly format: "date";
                                        };
                                        readonly endDate: {
                                            readonly description: "Check-Out date of the room";
                                            readonly type: "string";
                                            readonly format: "date";
                                        };
                                    };
                                };
                            };
                            readonly subReservationID: {
                                readonly description: "If roomID or roomName are given, the respective subReservationID (to that room) is informed.";
                                readonly type: "string";
                            };
                            readonly customFields: {
                                readonly description: "List of reservation custom fields. Only returned if \"includeCustomFields\" is true";
                                readonly type: "array";
                                readonly items: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly customFieldName: {
                                            readonly description: "Custom Field Name";
                                            readonly type: "string";
                                        };
                                        readonly customFieldValue: {
                                            readonly description: "Custom Field Value";
                                            readonly type: "string";
                                        };
                                    };
                                };
                            };
                            readonly rooms: {
                                readonly description: "Array with rooms information. Only returned if \"includeAllRooms\" is true";
                                readonly type: "array";
                                readonly items: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly roomTypeID: {
                                            readonly description: "Room Type ID";
                                            readonly type: "string";
                                        };
                                        readonly roomTypeName: {
                                            readonly description: "Room Type Name";
                                            readonly type: "string";
                                        };
                                        readonly roomTypeIsVirtual: {
                                            readonly description: "If room is virtual (true) or physical (false)";
                                            readonly type: "boolean";
                                        };
                                        readonly subReservationID: {
                                            readonly description: "sub Reservation ID (specific to each room)";
                                            readonly type: "string";
                                        };
                                        readonly guestID: {
                                            readonly description: "ID of the main guest assigned to the room";
                                            readonly type: "string";
                                        };
                                        readonly guestName: {
                                            readonly description: "Name of the main guest assigned to the room";
                                            readonly type: "string";
                                        };
                                        readonly adults: {
                                            readonly description: "Number of adults in the room";
                                            readonly type: "string";
                                        };
                                        readonly children: {
                                            readonly description: "Number of children in the room";
                                            readonly type: "string";
                                        };
                                        readonly reservationRoomID: {
                                            readonly description: "Reservation room ID";
                                            readonly type: "string";
                                        };
                                        readonly roomID: {
                                            readonly description: "Room ID (null if the reservation has not been assigned a specific room yet).";
                                            readonly type: "string";
                                        };
                                        readonly roomName: {
                                            readonly description: "Name of the room, if roomID=null it does not exist.";
                                            readonly type: "string";
                                        };
                                        readonly roomCheckIn: {
                                            readonly description: "Check-in date for the room";
                                            readonly type: "string";
                                        };
                                        readonly roomCheckOut: {
                                            readonly description: "Check-out date for the room";
                                            readonly type: "string";
                                        };
                                        readonly roomStatus: {
                                            readonly description: "\n\n`cancelled` `in_house` `checked_out` `not_checked_in`";
                                            readonly type: "string";
                                            readonly enum: readonly ["cancelled", "in_house", "checked_out", "not_checked_in"];
                                        };
                                        readonly marketName: {
                                            readonly description: "Market segmentation name";
                                            readonly type: "string";
                                        };
                                        readonly marketCode: {
                                            readonly description: "Market segmentation code";
                                            readonly type: "string";
                                        };
                                    };
                                };
                            };
                            readonly guestList: {
                                readonly description: "A map of guest IDs to guest objects (key is the Guest ID). It contains an entry for each guest included on the reservation. Only returned if \"includeGuestsDetails\" is true";
                                readonly type: "object";
                                readonly additionalProperties: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly guestID: {
                                            readonly description: "ID of the guest";
                                            readonly type: "string";
                                        };
                                        readonly guestName: {
                                            readonly description: "";
                                            readonly type: "string";
                                        };
                                        readonly guestFirstName: {
                                            readonly description: "";
                                            readonly type: "string";
                                        };
                                        readonly guestLastName: {
                                            readonly description: "";
                                            readonly type: "string";
                                        };
                                        readonly guestGender: {
                                            readonly description: "\n\n`M` `F` `N/A`";
                                            readonly type: "string";
                                            readonly enum: readonly ["M", "F", "N/A"];
                                        };
                                        readonly guestEmail: {
                                            readonly description: "";
                                            readonly type: "string";
                                        };
                                        readonly guestPhone: {
                                            readonly description: "";
                                            readonly type: "string";
                                        };
                                        readonly guestCellPhone: {
                                            readonly description: "";
                                            readonly type: "string";
                                        };
                                        readonly guestAddress: {
                                            readonly description: "";
                                            readonly type: "string";
                                        };
                                        readonly guestAddress2: {
                                            readonly description: "";
                                            readonly type: "string";
                                        };
                                        readonly guestCity: {
                                            readonly description: "";
                                            readonly type: "string";
                                        };
                                        readonly guestState: {
                                            readonly description: "";
                                            readonly type: "string";
                                        };
                                        readonly guestCountry: {
                                            readonly description: "";
                                            readonly type: "string";
                                        };
                                        readonly guestZip: {
                                            readonly description: "";
                                            readonly type: "string";
                                        };
                                        readonly guestBirthdate: {
                                            readonly description: "";
                                            readonly type: "string";
                                            readonly format: "date";
                                        };
                                        readonly guestDocumentType: {
                                            readonly description: "";
                                            readonly type: "string";
                                        };
                                        readonly guestDocumentNumber: {
                                            readonly description: "";
                                            readonly type: "string";
                                        };
                                        readonly guestDocumentIssueDate: {
                                            readonly description: "";
                                            readonly type: "string";
                                            readonly format: "date";
                                        };
                                        readonly guestDocumentIssuingCountry: {
                                            readonly description: "";
                                            readonly type: "string";
                                        };
                                        readonly guestDocumentExpirationDate: {
                                            readonly description: "";
                                            readonly type: "string";
                                            readonly format: "date";
                                        };
                                        readonly taxID: {
                                            readonly description: "Guest's tax ID";
                                            readonly type: "string";
                                        };
                                        readonly companyTaxID: {
                                            readonly description: "Guest's company tax ID";
                                            readonly type: "string";
                                        };
                                        readonly companyName: {
                                            readonly description: "Guest's company name";
                                            readonly type: "string";
                                        };
                                        readonly subReservationID: {
                                            readonly description: "";
                                            readonly type: "string";
                                        };
                                        readonly startDate: {
                                            readonly description: "";
                                            readonly type: "string";
                                            readonly format: "date";
                                        };
                                        readonly endDate: {
                                            readonly description: "";
                                            readonly type: "string";
                                            readonly format: "date";
                                        };
                                        readonly assignedRoom: {
                                            readonly description: "Returns true if guest has roomed assigned, false if not";
                                            readonly type: "string";
                                        };
                                        readonly roomID: {
                                            readonly description: "Room ID where guest is assigned";
                                            readonly type: "string";
                                        };
                                        readonly roomName: {
                                            readonly description: "Room Name where guest is assigned";
                                            readonly type: "string";
                                        };
                                        readonly roomTypeName: {
                                            readonly description: "Room Name where guest is assigned";
                                            readonly type: "string";
                                        };
                                        readonly roomTypeIsVirtual: {
                                            readonly description: "If room is virtual (true) or physical (false)";
                                            readonly type: "boolean";
                                        };
                                        readonly rooms: {
                                            readonly description: "List of all rooms that guest is assigned to";
                                            readonly type: "array";
                                            readonly items: {
                                                readonly type: "object";
                                                readonly properties: {
                                                    readonly reservationRoomID: {
                                                        readonly description: "Reservation room ID where guest is assigned";
                                                        readonly type: "string";
                                                    };
                                                    readonly roomID: {
                                                        readonly description: "Room ID where guest is assigned";
                                                        readonly type: "string";
                                                    };
                                                    readonly roomName: {
                                                        readonly description: "Room Name where guest is assigned";
                                                        readonly type: "string";
                                                    };
                                                    readonly roomTypeName: {
                                                        readonly description: "Room Type Name where guest is assigned";
                                                        readonly type: "string";
                                                    };
                                                    readonly roomTypeIsVirtual: {
                                                        readonly description: "If room is virtual (true) or physical (false)";
                                                        readonly type: "boolean";
                                                    };
                                                    readonly roomTypeID: {
                                                        readonly description: "Room Type ID";
                                                        readonly type: "string";
                                                    };
                                                    readonly roomTypeNameShort: {
                                                        readonly description: "Room Type Short Name";
                                                        readonly type: "string";
                                                    };
                                                    readonly rateID: {
                                                        readonly description: "Rate ID";
                                                        readonly type: "string";
                                                    };
                                                    readonly ratePlanName: {
                                                        readonly description: "Rate plan name";
                                                        readonly type: "string";
                                                    };
                                                    readonly roomStatus: {
                                                        readonly description: "\n\n`in_house` `checked_out` `not_checked_in`";
                                                        readonly type: "string";
                                                        readonly enum: readonly ["in_house", "checked_out", "not_checked_in"];
                                                    };
                                                    readonly subReservationID: {
                                                        readonly description: "";
                                                        readonly type: "string";
                                                    };
                                                };
                                            };
                                        };
                                        readonly unassignedRooms: {
                                            readonly description: "List of all unassigned rooms";
                                            readonly type: "array";
                                            readonly items: {
                                                readonly type: "object";
                                                readonly properties: {
                                                    readonly reservationRoomID: {
                                                        readonly description: "Reservation room ID";
                                                        readonly type: "string";
                                                    };
                                                    readonly roomTypeID: {
                                                        readonly description: "ID of the assigned room type";
                                                        readonly type: "string";
                                                    };
                                                    readonly roomTypeName: {
                                                        readonly description: "Room Type Name where guest is assigned";
                                                        readonly type: "string";
                                                    };
                                                    readonly roomTypeIsVirtual: {
                                                        readonly description: "If room is virtual (true) or physical (false)";
                                                        readonly type: "boolean";
                                                    };
                                                    readonly roomTypeNameShort: {
                                                        readonly description: "Room Type Short Name";
                                                        readonly type: "string";
                                                    };
                                                    readonly rateID: {
                                                        readonly description: "Rate ID";
                                                        readonly type: "string";
                                                    };
                                                    readonly ratePlanName: {
                                                        readonly description: "Rate plan name";
                                                        readonly type: "string";
                                                    };
                                                    readonly subReservationID: {
                                                        readonly description: "Sub Reservation ID of the specific assigned room";
                                                        readonly type: "string";
                                                    };
                                                };
                                            };
                                        };
                                        readonly guestRequirements: {
                                            readonly description: "Guest requirements data. Only included if `includeGuestsDetails=true` and `includeGuestRequirements=true`.";
                                            readonly type: "array";
                                            readonly items: {
                                                readonly type: "object";
                                                readonly additionalProperties: true;
                                            };
                                        };
                                        readonly customFields: {
                                            readonly description: "List of guest custom fields";
                                            readonly type: "array";
                                            readonly items: {
                                                readonly type: "object";
                                                readonly properties: {
                                                    readonly customFieldName: {
                                                        readonly description: "Custom Field Name";
                                                        readonly type: "string";
                                                    };
                                                    readonly customFieldValue: {
                                                        readonly description: "Custom Field Value";
                                                        readonly type: "string";
                                                    };
                                                };
                                            };
                                        };
                                        readonly isAnonymized: {
                                            readonly description: "Flag indicating the guest data was removed upon request";
                                            readonly type: "boolean";
                                        };
                                        readonly isMainGuest: {
                                            readonly description: "Flag indicating the guest is the main guest on the reservation";
                                            readonly type: "boolean";
                                        };
                                    };
                                };
                            };
                            readonly origin: {
                                readonly description: "Reservation origin";
                                readonly type: "string";
                            };
                            readonly mealPlans: {
                                readonly description: "Reservation meal plans";
                                readonly type: "string";
                            };
                        };
                    };
                };
                readonly count: {
                    readonly description: "Number of results returned";
                    readonly type: "integer";
                };
                readonly total: {
                    readonly description: "Total number of results";
                    readonly type: "integer";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const Getreservationswithratedetails: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly propertyID: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Property ID";
                };
                readonly resultsFrom: {
                    readonly type: "string";
                    readonly format: "date-time";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Inferior limit datetime, used to filter reservations, based on booking date. If it is not set, will return the reservations starting 2 years ago";
                };
                readonly resultsTo: {
                    readonly type: "string";
                    readonly format: "date-time";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Superior limit datetime, used to filter reservations, based on booking date. If it is not set, will return the reservations up to current date";
                };
                readonly modifiedFrom: {
                    readonly type: "string";
                    readonly format: "date-time";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Superior limit datetime, used to filter reservations, based on modification date.";
                };
                readonly modifiedTo: {
                    readonly type: "string";
                    readonly format: "date-time";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Superior limit datetime, used to filter reservations, based on modification date.";
                };
                readonly sortByRecent: {
                    readonly type: "boolean";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Sort response results by most recent action";
                };
                readonly reservationID: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Reservation identifiers, comma-separated, i.e. 37,345,89, used to return transactions limited to the selected reservations.";
                };
                readonly reservationCheckOutFrom: {
                    readonly type: "string";
                    readonly format: "date";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Superior limit datetime, used to filter reservations, based on reservation check-out date.";
                };
                readonly reservationCheckOutTo: {
                    readonly type: "string";
                    readonly format: "date";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Superior limit datetime, used to filter reservations, based on reservation check-out date.";
                };
                readonly includeDeleted: {
                    readonly type: "boolean";
                    readonly default: false;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Include deleted reservations";
                };
                readonly excludeStatuses: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "List of statuses (separated by comma) to be excluded from search";
                };
                readonly includeGuestsDetails: {
                    readonly type: "boolean";
                    readonly default: false;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "If guests details should be included or not";
                };
                readonly includeGuestRequirements: {
                    readonly type: "boolean";
                    readonly default: false;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Includes guest requirements data in the response. Requires `includeGuestsDetails=true`.";
                };
                readonly includeCustomFields: {
                    readonly type: "boolean";
                    readonly default: false;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "If reservation custom fields should be included or not";
                };
                readonly pageNumber: {
                    readonly type: "integer";
                    readonly default: 1;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Results page number";
                };
                readonly pageSize: {
                    readonly type: "integer";
                    readonly default: 100;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Results page size. Max = 100";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly success: {
                    readonly description: "Returns if the request could be completed";
                    readonly type: "boolean";
                };
                readonly data: {
                    readonly description: "Details for the reservations returned";
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly propertyID: {
                                readonly description: "Properties identifier";
                                readonly type: "string";
                            };
                            readonly reservationID: {
                                readonly description: "Reservation's unique identifier";
                                readonly type: "string";
                            };
                            readonly isDeleted: {
                                readonly description: "";
                                readonly type: "boolean";
                            };
                            readonly dateCreated: {
                                readonly description: "";
                                readonly type: "string";
                                readonly format: "date-time";
                            };
                            readonly dateCreatedUTC: {
                                readonly description: "";
                                readonly type: "string";
                                readonly format: "date-time";
                            };
                            readonly dateModified: {
                                readonly description: "";
                                readonly type: "string";
                                readonly format: "date-time";
                            };
                            readonly dateModifiedUTC: {
                                readonly description: "";
                                readonly type: "string";
                                readonly format: "date-time";
                            };
                            readonly dateCancelled: {
                                readonly description: "Will be displayed only if \"status = 'canceled'\"";
                                readonly type: "string";
                                readonly format: "date-time";
                            };
                            readonly dateCancelledUTC: {
                                readonly description: "Will be displayed only if \"status = 'canceled'\"";
                                readonly type: "string";
                                readonly format: "date-time";
                            };
                            readonly status: {
                                readonly description: "Reservation status<br /> 'not_confirmed' - Reservation is pending confirmation<br /> 'confirmed' - Reservation is confirmed<br /> 'canceled' - Reservation is canceled<br /> 'checked_in' - Guest is in hotel<br /> 'checked_out' - Guest already left hotel<br /> 'no_show' - Guest didn't showed up on check-in date\n\n`confirmed` `not_confirmed` `canceled` `checked_in` `checked_out` `no_show`";
                                readonly type: "string";
                                readonly enum: readonly ["confirmed", "not_confirmed", "canceled", "checked_in", "checked_out", "no_show"];
                            };
                            readonly reservationCheckIn: {
                                readonly description: "";
                                readonly type: "string";
                                readonly format: "date-time";
                            };
                            readonly reservationCheckOut: {
                                readonly description: "";
                                readonly type: "string";
                                readonly format: "date-time";
                            };
                            readonly guestID: {
                                readonly description: "Main guest ID";
                                readonly type: "string";
                            };
                            readonly profileID: {
                                readonly description: "Main guest profile ID";
                                readonly type: "string";
                            };
                            readonly guestCountry: {
                                readonly description: "Main guest Country";
                                readonly type: "integer";
                            };
                            readonly sourceName: {
                                readonly description: "Reservation source";
                                readonly type: "string";
                            };
                            readonly source: {
                                readonly description: "";
                                readonly type: "array";
                                readonly items: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly name: {
                                            readonly description: "Reservation source";
                                            readonly type: "string";
                                        };
                                        readonly paymentCollect: {
                                            readonly description: "Reservation payment collect source\n\n`hotel` `collect`";
                                            readonly type: "string";
                                            readonly enum: readonly ["hotel", "collect"];
                                        };
                                        readonly sourceID: {
                                            readonly description: "Booking source unique id";
                                            readonly type: "string";
                                        };
                                        readonly category: {
                                            readonly description: "Reservation source category";
                                            readonly type: "string";
                                        };
                                    };
                                };
                            };
                            readonly sourceCategory: {
                                readonly description: "Reservation source category";
                                readonly type: "integer";
                            };
                            readonly sourceReservationID: {
                                readonly description: "Reservation ID on the source";
                                readonly type: "integer";
                            };
                            readonly propertyCurrency: {
                                readonly description: "Property currency ISO-formatted (3 characters)";
                                readonly type: "integer";
                            };
                            readonly balanceDetailed: {
                                readonly description: "Reservation balance detailed with the information available on MyFrontdesk, describing the financial items calculated";
                                readonly type: "array";
                                readonly items: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly suggestedDeposit: {
                                            readonly description: "Suggested deposit value, calculated according to the hotel policies. Does not mean that it was effectively paid";
                                            readonly type: "string";
                                        };
                                        readonly subTotal: {
                                            readonly description: "Sum of the room prices on the reservation";
                                            readonly type: "number";
                                        };
                                        readonly additionalItems: {
                                            readonly description: "Sum of the additional items recorded on the reservation";
                                            readonly type: "number";
                                        };
                                        readonly taxesFees: {
                                            readonly description: "Sum of the taxes and fees calculated on the reservation";
                                            readonly type: "number";
                                        };
                                        readonly grandTotal: {
                                            readonly description: "Sum of sub.Total + additionalItems + taxesFees";
                                            readonly type: "number";
                                        };
                                        readonly paid: {
                                            readonly description: "Amount paid (reservation deposit + any other extra payment)";
                                            readonly type: "number";
                                        };
                                    };
                                };
                            };
                            readonly detailedRates: {
                                readonly description: "Associative object, where key is the date, and value is the total rate for that date.";
                                readonly type: "array";
                                readonly items: {
                                    readonly type: "object";
                                    readonly additionalProperties: true;
                                };
                            };
                            readonly rooms: {
                                readonly description: "Array with rooms information";
                                readonly type: "array";
                                readonly items: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly roomTypeID: {
                                            readonly description: "Room Type ID";
                                            readonly type: "string";
                                        };
                                        readonly roomTypeIsVirtual: {
                                            readonly description: "If room is virtual (true) or physical (false)";
                                            readonly type: "boolean";
                                        };
                                        readonly roomTypeName: {
                                            readonly description: "Room Type Name";
                                            readonly type: "string";
                                        };
                                        readonly subReservationID: {
                                            readonly description: "sub Reservation ID (specific to each room)";
                                            readonly type: "string";
                                        };
                                        readonly guestID: {
                                            readonly description: "ID of the main guest assigned to the room";
                                            readonly type: "string";
                                        };
                                        readonly guestName: {
                                            readonly description: "Name of the main guest assigned to the room";
                                            readonly type: "string";
                                        };
                                        readonly rateID: {
                                            readonly description: "ID of the rate used for the booking room";
                                            readonly type: "string";
                                        };
                                        readonly rateName: {
                                            readonly description: "Name of the rate used for the booking room";
                                            readonly type: "string";
                                        };
                                        readonly adults: {
                                            readonly description: "Number of adults in the room";
                                            readonly type: "string";
                                        };
                                        readonly children: {
                                            readonly description: "Number of children in the room";
                                            readonly type: "string";
                                        };
                                        readonly reservationRoomID: {
                                            readonly description: "Reservation room ID";
                                            readonly type: "string";
                                        };
                                        readonly roomID: {
                                            readonly description: "Room ID (null if the reservation has not been assigned a specific room yet).";
                                            readonly type: "string";
                                        };
                                        readonly roomName: {
                                            readonly description: "Name of the room, if roomID=null it does not exist.";
                                            readonly type: "string";
                                        };
                                        readonly roomCheckIn: {
                                            readonly description: "Check-in date for the room";
                                            readonly type: "string";
                                        };
                                        readonly roomCheckOut: {
                                            readonly description: "Check-out date for the room";
                                            readonly type: "string";
                                        };
                                        readonly roomStatus: {
                                            readonly description: "\n\n`cancelled` `in_house` `checked_out` `not_checked_in`";
                                            readonly type: "string";
                                            readonly enum: readonly ["cancelled", "in_house", "checked_out", "not_checked_in"];
                                        };
                                        readonly detailedRoomRates: {
                                            readonly description: "Associative object, with dates as indexes, and rates as values";
                                            readonly type: "array";
                                            readonly items: {
                                                readonly type: "object";
                                                readonly additionalProperties: true;
                                            };
                                        };
                                        readonly marketName: {
                                            readonly description: "Market segmentation name";
                                            readonly type: "string";
                                        };
                                        readonly marketCode: {
                                            readonly description: "Market segmentation code";
                                            readonly type: "string";
                                        };
                                    };
                                };
                            };
                            readonly origin: {
                                readonly description: "Reservation origin";
                                readonly type: "string";
                            };
                            readonly mealPlans: {
                                readonly description: "Reservation meal plans";
                                readonly type: "string";
                            };
                            readonly guestList: {
                                readonly description: "A map of guest IDs to guest objects (key is the Guest ID). It contains an entry for each guest included on the reservation. Only returned if \"includeGuestsDetails\" is true";
                                readonly type: "object";
                                readonly additionalProperties: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly guestID: {
                                            readonly description: "ID of the guest";
                                            readonly type: "string";
                                        };
                                        readonly guestName: {
                                            readonly description: "";
                                            readonly type: "string";
                                        };
                                        readonly guestFirstName: {
                                            readonly description: "";
                                            readonly type: "string";
                                        };
                                        readonly guestLastName: {
                                            readonly description: "";
                                            readonly type: "string";
                                        };
                                        readonly guestGender: {
                                            readonly description: "\n\n`M` `F` `N/A`";
                                            readonly type: "string";
                                            readonly enum: readonly ["M", "F", "N/A"];
                                        };
                                        readonly guestEmail: {
                                            readonly description: "";
                                            readonly type: "string";
                                        };
                                        readonly guestPhone: {
                                            readonly description: "";
                                            readonly type: "string";
                                        };
                                        readonly guestCellPhone: {
                                            readonly description: "";
                                            readonly type: "string";
                                        };
                                        readonly guestAddress: {
                                            readonly description: "";
                                            readonly type: "string";
                                        };
                                        readonly guestAddress2: {
                                            readonly description: "";
                                            readonly type: "string";
                                        };
                                        readonly guestCity: {
                                            readonly description: "";
                                            readonly type: "string";
                                        };
                                        readonly guestState: {
                                            readonly description: "";
                                            readonly type: "string";
                                        };
                                        readonly guestCountry: {
                                            readonly description: "";
                                            readonly type: "string";
                                        };
                                        readonly guestZip: {
                                            readonly description: "";
                                            readonly type: "string";
                                        };
                                        readonly guestBirthdate: {
                                            readonly description: "";
                                            readonly type: "string";
                                            readonly format: "date";
                                        };
                                        readonly guestDocumentType: {
                                            readonly description: "";
                                            readonly type: "string";
                                        };
                                        readonly guestDocumentNumber: {
                                            readonly description: "";
                                            readonly type: "string";
                                        };
                                        readonly guestDocumentIssueDate: {
                                            readonly description: "";
                                            readonly type: "string";
                                            readonly format: "date";
                                        };
                                        readonly guestDocumentIssuingCountry: {
                                            readonly description: "";
                                            readonly type: "string";
                                        };
                                        readonly guestDocumentExpirationDate: {
                                            readonly description: "";
                                            readonly type: "string";
                                            readonly format: "date";
                                        };
                                        readonly taxID: {
                                            readonly description: "Guest's tax ID";
                                            readonly type: "string";
                                        };
                                        readonly companyTaxID: {
                                            readonly description: "Guest's company tax ID";
                                            readonly type: "string";
                                        };
                                        readonly companyName: {
                                            readonly description: "Guest's company name";
                                            readonly type: "string";
                                        };
                                        readonly subReservationID: {
                                            readonly description: "";
                                            readonly type: "string";
                                        };
                                        readonly startDate: {
                                            readonly description: "";
                                            readonly type: "string";
                                            readonly format: "date";
                                        };
                                        readonly endDate: {
                                            readonly description: "";
                                            readonly type: "string";
                                            readonly format: "date";
                                        };
                                        readonly assignedRoom: {
                                            readonly description: "Returns true if guest has roomed assigned, false if not";
                                            readonly type: "string";
                                        };
                                        readonly roomID: {
                                            readonly description: "Room ID where guest is assigned";
                                            readonly type: "string";
                                        };
                                        readonly roomName: {
                                            readonly description: "Room Name where guest is assigned";
                                            readonly type: "string";
                                        };
                                        readonly roomTypeName: {
                                            readonly description: "Room Name where guest is assigned";
                                            readonly type: "string";
                                        };
                                        readonly roomTypeIsVirtual: {
                                            readonly description: "If room is virtual (true) or physical (false)";
                                            readonly type: "boolean";
                                        };
                                        readonly rooms: {
                                            readonly description: "List of all rooms that guest is assigned to";
                                            readonly type: "array";
                                            readonly items: {
                                                readonly type: "object";
                                                readonly properties: {
                                                    readonly reservationRoomID: {
                                                        readonly description: "Reservation room ID where guest is assigned";
                                                        readonly type: "string";
                                                    };
                                                    readonly roomID: {
                                                        readonly description: "Room ID where guest is assigned";
                                                        readonly type: "string";
                                                    };
                                                    readonly roomName: {
                                                        readonly description: "Room Name where guest is assigned";
                                                        readonly type: "string";
                                                    };
                                                    readonly roomTypeName: {
                                                        readonly description: "Room Type Name where guest is assigned";
                                                        readonly type: "string";
                                                    };
                                                    readonly roomTypeIsVirtual: {
                                                        readonly description: "If room is virtual (true) or physical (false)";
                                                        readonly type: "boolean";
                                                    };
                                                    readonly roomTypeID: {
                                                        readonly description: "Room Type ID";
                                                        readonly type: "string";
                                                    };
                                                    readonly roomTypeNameShort: {
                                                        readonly description: "Room Type Short Name";
                                                        readonly type: "string";
                                                    };
                                                    readonly rateID: {
                                                        readonly description: "Rate ID";
                                                        readonly type: "string";
                                                    };
                                                    readonly ratePlanName: {
                                                        readonly description: "Rate plan name";
                                                        readonly type: "string";
                                                    };
                                                    readonly roomStatus: {
                                                        readonly description: "\n\n`in_house` `checked_out` `not_checked_in`";
                                                        readonly type: "string";
                                                        readonly enum: readonly ["in_house", "checked_out", "not_checked_in"];
                                                    };
                                                    readonly subReservationID: {
                                                        readonly description: "";
                                                        readonly type: "string";
                                                    };
                                                };
                                            };
                                        };
                                        readonly unassignedRooms: {
                                            readonly description: "List of all unassigned rooms";
                                            readonly type: "array";
                                            readonly items: {
                                                readonly type: "object";
                                                readonly properties: {
                                                    readonly reservationRoomID: {
                                                        readonly description: "Reservation room ID";
                                                        readonly type: "string";
                                                    };
                                                    readonly roomTypeID: {
                                                        readonly description: "ID of the assigned room type";
                                                        readonly type: "string";
                                                    };
                                                    readonly roomTypeName: {
                                                        readonly description: "Room Type Name where guest is assigned";
                                                        readonly type: "string";
                                                    };
                                                    readonly roomTypeIsVirtual: {
                                                        readonly description: "If room is virtual (true) or physical (false)";
                                                        readonly type: "boolean";
                                                    };
                                                    readonly roomTypeNameShort: {
                                                        readonly description: "Room Type Short Name";
                                                        readonly type: "string";
                                                    };
                                                    readonly rateID: {
                                                        readonly description: "Rate ID";
                                                        readonly type: "string";
                                                    };
                                                    readonly ratePlanName: {
                                                        readonly description: "Rate plan name";
                                                        readonly type: "string";
                                                    };
                                                    readonly subReservationID: {
                                                        readonly description: "Sub Reservation ID of the specific assigned room";
                                                        readonly type: "string";
                                                    };
                                                };
                                            };
                                        };
                                        readonly guestRequirements: {
                                            readonly description: "Guest requirements data. Only included if `includeGuestsDetails=true` and `includeGuestRequirements=true`.";
                                            readonly type: "array";
                                            readonly items: {
                                                readonly type: "object";
                                                readonly additionalProperties: true;
                                            };
                                        };
                                        readonly customFields: {
                                            readonly description: "List of guest custom fields";
                                            readonly type: "array";
                                            readonly items: {
                                                readonly type: "object";
                                                readonly properties: {
                                                    readonly customFieldName: {
                                                        readonly description: "Custom Field Name";
                                                        readonly type: "string";
                                                    };
                                                    readonly customFieldValue: {
                                                        readonly description: "Custom Field Value";
                                                        readonly type: "string";
                                                    };
                                                };
                                            };
                                        };
                                        readonly isAnonymized: {
                                            readonly description: "Flag indicating the guest data was removed upon request";
                                            readonly type: "boolean";
                                        };
                                        readonly isMainGuest: {
                                            readonly description: "Flag indicating the guest is the main guest on the reservation";
                                            readonly type: "boolean";
                                        };
                                    };
                                };
                            };
                            readonly thirdPartyIdentifier: {
                                readonly description: "";
                                readonly type: "string";
                            };
                            readonly customFields: {
                                readonly description: "List of reservation custom fields. Only returned if \"includeCustomFields\" is true";
                                readonly type: "array";
                                readonly items: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly customFieldName: {
                                            readonly description: "Custom Field Name";
                                            readonly type: "string";
                                        };
                                        readonly customFieldValue: {
                                            readonly description: "Custom Field Value";
                                            readonly type: "string";
                                        };
                                    };
                                };
                            };
                            readonly estimatedArrivalTime: {
                                readonly description: "Estimated arrival time, 24-hour format.";
                                readonly type: "string";
                                readonly format: "time";
                            };
                            readonly total: {
                                readonly description: "Total price of the booking";
                                readonly type: "number";
                            };
                            readonly balance: {
                                readonly description: "Balance currently owed";
                                readonly type: "number";
                            };
                            readonly dateImported: {
                                readonly description: "Date when the reservation was imported";
                                readonly type: "string";
                            };
                        };
                    };
                };
                readonly count: {
                    readonly description: "Number of results returned";
                    readonly type: "integer";
                };
                readonly total: {
                    readonly description: "Total number of results";
                    readonly type: "integer";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const Getroomblocks: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly propertyID: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Property ID";
                };
                readonly roomBlockID: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Room block ID";
                };
                readonly roomTypeID: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Room type ID";
                };
                readonly roomID: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Room ID";
                };
                readonly startDate: {
                    readonly type: "string";
                    readonly format: "date";
                    readonly default: "Todays";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "date\"] Start date - will filter for any room blocks that include this date (Date range must be one month or less)";
                };
                readonly endDate: {
                    readonly type: "string";
                    readonly format: "date";
                    readonly default: "Todays";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "date\"] End date - will filter for any room blocks that include this date (Date range must be one month or less)";
                };
                readonly pageNumber: {
                    readonly type: "integer";
                    readonly default: 1;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Page number";
                };
                readonly pageSize: {
                    readonly type: "integer";
                    readonly default: 20;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Page size";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly success: {
                    readonly description: "Returns if the request could be completed";
                    readonly type: "boolean";
                };
                readonly data: {
                    readonly description: "Room block details";
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly roomBlockID: {
                                readonly description: "Room block ID";
                                readonly type: "string";
                            };
                            readonly roomBlockType: {
                                readonly description: "Room block type. ‘blocked’ - Room block. ‘out_of_service’ - Out of service block\n\n`blocked` `out_of_service`";
                                readonly type: "string";
                                readonly enum: readonly ["blocked", "out_of_service"];
                            };
                            readonly roomBlockReason: {
                                readonly description: "Room block reason";
                                readonly type: "string";
                            };
                            readonly startDate: {
                                readonly description: "Room block start date";
                                readonly type: "string";
                                readonly format: "date";
                            };
                            readonly endDate: {
                                readonly description: "Room block end date";
                                readonly type: "string";
                                readonly format: "date";
                            };
                            readonly rooms: {
                                readonly description: "All rooms for Block ID";
                                readonly type: "array";
                                readonly items: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly roomID: {
                                            readonly description: "Room ID";
                                            readonly type: "string";
                                        };
                                        readonly roomTypeID: {
                                            readonly description: "Room type ID";
                                            readonly type: "string";
                                        };
                                    };
                                };
                            };
                            readonly count: {
                                readonly description: "Number of results (properties) returned.";
                                readonly type: "integer";
                            };
                        };
                    };
                };
                readonly message: {
                    readonly description: "To be used in case any error occurs (if success = false).  If success = true, it does not exist.";
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const Getrooms: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly propertyIDs: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Property ID list, comma-separated, i.e. 37,345,89";
                };
                readonly roomTypeID: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Room type ID, comma-separated, i.e. 37,345,89";
                };
                readonly roomTypeNameShort: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Room Type (short-version)";
                };
                readonly startDate: {
                    readonly type: "string";
                    readonly format: "date";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Initial stay date. If sent, only returns unassigned rooms in this period. If not sent, will return all rooms available in property. Necessary if endDate is sent.";
                };
                readonly endDate: {
                    readonly type: "string";
                    readonly format: "date";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Final stay date. Necessary if startDate is sent.";
                };
                readonly includeRoomRelations: {
                    readonly type: "integer";
                    readonly default: 0;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Determines whether room relations info should be included in the response";
                };
                readonly pageNumber: {
                    readonly type: "integer";
                    readonly default: 1;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Page number";
                };
                readonly pageSize: {
                    readonly type: "integer";
                    readonly default: 20;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Page size";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly success: {
                    readonly description: "Returns if the request could be completed";
                    readonly type: "boolean";
                };
                readonly data: {
                    readonly description: "Room Types details";
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly propertyID: {
                                readonly description: "Property ID";
                                readonly type: "string";
                            };
                            readonly rooms: {
                                readonly description: "All rooms for property ID";
                                readonly type: "array";
                                readonly items: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly roomID: {
                                            readonly description: "Room ID";
                                            readonly type: "string";
                                        };
                                        readonly roomName: {
                                            readonly description: "Room Name";
                                            readonly type: "string";
                                        };
                                        readonly dormRoomName: {
                                            readonly description: "Name of the dorm room. Used for the shared dorm beds that are organized into rooms within the same room type";
                                            readonly type: "string";
                                        };
                                        readonly roomDescription: {
                                            readonly description: "Room Description";
                                            readonly type: "string";
                                        };
                                        readonly maxGuests: {
                                            readonly description: "Number of guests that room allows";
                                            readonly type: "integer";
                                        };
                                        readonly isPrivate: {
                                            readonly description: "If room is private (true) or shared (false)";
                                            readonly type: "boolean";
                                        };
                                        readonly isVirtual: {
                                            readonly description: "If room is virtual (true) or physical (false)";
                                            readonly type: "boolean";
                                        };
                                        readonly roomBlocked: {
                                            readonly description: "If room is blocked on calendar during the period selected. If no check-in/out dates are sent, it returns the status for the current day.";
                                            readonly type: "boolean";
                                        };
                                        readonly roomTypeID: {
                                            readonly description: "Room type ID";
                                            readonly type: "string";
                                        };
                                        readonly roomTypeName: {
                                            readonly description: "Room type Name";
                                            readonly type: "string";
                                        };
                                        readonly roomTypeNameShort: {
                                            readonly description: "Room type Short Name";
                                            readonly type: "string";
                                        };
                                        readonly doorlockID: {
                                            readonly description: "The doorlock ID for the room";
                                            readonly type: "string";
                                        };
                                        readonly linkedRoomIDs: {
                                            readonly description: "List of linked room IDs for this room (including nested relations). Only returned if includeRoomRelations is set to true";
                                            readonly type: "array";
                                            readonly items: {
                                                readonly type: "string";
                                            };
                                        };
                                        readonly linkedRoomTypeIDs: {
                                            readonly description: "List of linked room type IDs. Only returned if includeRoomRelations is set to true";
                                            readonly type: "array";
                                            readonly items: {
                                                readonly type: "string";
                                            };
                                        };
                                        readonly linkedRoomTypeQty: {
                                            readonly description: "Data about linked rooms count, grouped by room type. Only returned if includeRoomRelations is set to true";
                                            readonly type: "array";
                                            readonly items: {
                                                readonly type: "object";
                                                readonly properties: {
                                                    readonly roomTypeId: {
                                                        readonly description: "Room type ID";
                                                        readonly type: "string";
                                                    };
                                                    readonly roomQty: {
                                                        readonly description: "Related rooms count";
                                                        readonly type: "integer";
                                                    };
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
                readonly count: {
                    readonly description: "Number of results (properties) returned";
                    readonly type: "integer";
                };
                readonly total: {
                    readonly description: "Total number of results, can be more than what was returned";
                    readonly type: "integer";
                };
                readonly message: {
                    readonly description: "To be used in case any error occurs (if success = false). If success = true, it does not exist.";
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const Getroomsfeesandtaxes: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly propertyID: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Property ID";
                };
                readonly startDate: {
                    readonly type: "string";
                    readonly format: "date";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Check-in date";
                };
                readonly endDate: {
                    readonly type: "string";
                    readonly format: "date";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Check-out date";
                };
                readonly roomsTotal: {
                    readonly type: "number";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Total value of the rooms to be booked, with included taxes";
                };
                readonly roomsCount: {
                    readonly type: "integer";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Number of rooms to be booked";
                };
            };
            readonly required: readonly ["startDate", "endDate", "roomsTotal", "roomsCount"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly success: {
                    readonly description: "Returns if the request could be completed";
                    readonly type: "boolean";
                };
                readonly data: {
                    readonly description: "Details of the fees and taxes applicable";
                    readonly type: "object";
                    readonly properties: {
                        readonly fees: {
                            readonly description: "Details of the fees applicable";
                            readonly type: "array";
                            readonly items: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly feeName: {
                                        readonly description: "Name of the fee";
                                        readonly type: "string";
                                    };
                                    readonly feeValue: {
                                        readonly description: "Value of the fee for the selected parameters";
                                        readonly type: "number";
                                    };
                                    readonly totalFees: {
                                        readonly description: "Total value of the fees";
                                        readonly type: "number";
                                    };
                                };
                            };
                        };
                        readonly taxes: {
                            readonly description: "Details of the taxes applicable";
                            readonly type: "array";
                            readonly items: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly feeName: {
                                        readonly description: "Name of the tax";
                                        readonly type: "string";
                                    };
                                    readonly feeValue: {
                                        readonly description: "Value of the tax for the selected parameters";
                                        readonly type: "string";
                                    };
                                    readonly totalTaxes: {
                                        readonly description: "Total value of the taxes";
                                        readonly type: "number";
                                    };
                                };
                            };
                        };
                        readonly roomsTotalWithoutTaxes: {
                            readonly description: "\"roomsTotal\" parameter subtracting the included taxes";
                            readonly type: "number";
                        };
                        readonly grandTotal: {
                            readonly description: "Total with fees and taxes";
                            readonly type: "number";
                        };
                    };
                };
                readonly message: {
                    readonly description: "To be used in case any error occurs (if success = false). If success = true, it does not exist.";
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const Getroomsunassigned: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly propertyIDs: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "List of property IDs, comma-separated, i.e. 37,345,89";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly success: {
                    readonly description: "Returns if the request could be completed";
                    readonly type: "boolean";
                };
                readonly data: {
                    readonly description: "Room Types details";
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly propertyID: {
                                readonly description: "Property ID";
                                readonly type: "string";
                            };
                            readonly rooms: {
                                readonly description: "All rooms for property ID";
                                readonly type: "array";
                                readonly items: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly roomID: {
                                            readonly description: "Room ID";
                                            readonly type: "string";
                                        };
                                        readonly roomName: {
                                            readonly description: "Room Name";
                                            readonly type: "string";
                                        };
                                        readonly dormRoomName: {
                                            readonly description: "Name of the dorm room. Used for the shared dorm beds that are organized into rooms within the same room type";
                                            readonly type: "string";
                                        };
                                        readonly roomDescription: {
                                            readonly description: "Room Description";
                                            readonly type: "string";
                                        };
                                        readonly maxGuests: {
                                            readonly description: "Number of guests that room allows";
                                            readonly type: "integer";
                                        };
                                        readonly isPrivate: {
                                            readonly description: "If room is private (true) or shared (false)";
                                            readonly type: "boolean";
                                        };
                                        readonly isVirtual: {
                                            readonly description: "If room is virtual (true) or physical (false)";
                                            readonly type: "boolean";
                                        };
                                        readonly roomBlocked: {
                                            readonly description: "If room is blocked on calendar during the period selected. If no check-in/out dates are sent, it returns the status for the current day.";
                                            readonly type: "boolean";
                                        };
                                        readonly roomTypeID: {
                                            readonly description: "Room type ID";
                                            readonly type: "string";
                                        };
                                        readonly roomTypeName: {
                                            readonly description: "Room type Name";
                                            readonly type: "string";
                                        };
                                        readonly roomTypeNameShort: {
                                            readonly description: "Room type Short Name";
                                            readonly type: "string";
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
                readonly count: {
                    readonly description: "Number of results (properties) returned";
                    readonly type: "integer";
                };
                readonly total: {
                    readonly description: "Total number of results, can be more than what was returned";
                    readonly type: "integer";
                };
                readonly message: {
                    readonly description: "To be used in case any error occurs (if success = false). If success = true, it does not exist.";
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const Getroomtypes: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly propertyIDs: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Property ID list, comma-separated, i.e. 37,345,89";
                };
                readonly roomTypeIDs: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Room Type ID list, If more than one, send as comma-separated, i.e. 37,345,89";
                };
                readonly startDate: {
                    readonly type: "string";
                    readonly format: "date";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Check-in date. Required for the rates to be returned.";
                };
                readonly endDate: {
                    readonly type: "string";
                    readonly format: "date";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Check-out date. Required for the rates to be returned.";
                };
                readonly adults: {
                    readonly type: "integer";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Number of adults. Required for the rates to be returned.";
                };
                readonly children: {
                    readonly type: "integer";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Number of children. Required for the rates to be returned.";
                };
                readonly detailedRates: {
                    readonly type: "boolean";
                    readonly default: false;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "If detailed rates are expected";
                };
                readonly roomTypeName: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Room type name, used to filter";
                };
                readonly propertyCity: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Hotel city, used to filter";
                };
                readonly propertyName: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Hotel name, used to filter";
                };
                readonly maxGuests: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Max number of guests, used to filter";
                };
                readonly pageNumber: {
                    readonly type: "integer";
                    readonly default: 1;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Page number";
                };
                readonly pageSize: {
                    readonly type: "integer";
                    readonly default: 20;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Page size";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly success: {
                    readonly description: "Returns if the request could be completed";
                    readonly type: "boolean";
                };
                readonly data: {
                    readonly description: "Room Types details";
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly roomTypeID: {
                                readonly description: "Room Type ID";
                                readonly type: "string";
                            };
                            readonly propertyID: {
                                readonly description: "Property ID";
                                readonly type: "string";
                            };
                            readonly roomTypeName: {
                                readonly description: "Room Type Name";
                                readonly type: "string";
                            };
                            readonly roomTypeNameShort: {
                                readonly description: "Room Type Short Name";
                                readonly type: "string";
                            };
                            readonly roomTypeDescription: {
                                readonly description: "Room Type Description";
                                readonly type: "string";
                            };
                            readonly isPrivate: {
                                readonly description: "Whether room is private or shared";
                                readonly type: "boolean";
                            };
                            readonly maxGuests: {
                                readonly description: "Max number of guests allowed in the room type";
                                readonly type: "integer";
                            };
                            readonly adultsIncluded: {
                                readonly description: "Number of adults included on the basic room rate";
                                readonly type: "integer";
                            };
                            readonly childrenIncluded: {
                                readonly description: "Number of children included on the basic room rate";
                                readonly type: "integer";
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const Getsources: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly propertyIDs: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "ID for the properties to be queried (comma-separated, i.e. 37,345,89).<br />";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly success: {
                    readonly description: "Returns if the request could be completed";
                    readonly type: "boolean";
                };
                readonly data: {
                    readonly description: "";
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly propertyID: {
                                readonly description: "Property Id";
                                readonly type: "string";
                            };
                            readonly sourceID: {
                                readonly description: "Source Identifier";
                                readonly type: "string";
                            };
                            readonly sourceName: {
                                readonly description: "Source Name";
                                readonly type: "string";
                            };
                            readonly isThirdParty: {
                                readonly description: "true if source is from third party";
                                readonly type: "boolean";
                            };
                            readonly status: {
                                readonly description: "true if source is active";
                                readonly type: "boolean";
                            };
                            readonly commission: {
                                readonly description: "How much commission charged by source (in %)";
                                readonly type: "number";
                            };
                            readonly paymentCollect: {
                                readonly description: "Type of payment collect practiced by source\n\n`hotel` `channel`";
                                readonly type: "string";
                                readonly enum: readonly ["hotel", "channel"];
                            };
                            readonly taxes: {
                                readonly description: "";
                                readonly type: "array";
                                readonly items: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly taxID: {
                                            readonly description: "ID of tax";
                                            readonly type: "string";
                                        };
                                        readonly name: {
                                            readonly description: "Name of tax";
                                            readonly type: "string";
                                        };
                                        readonly amount: {
                                            readonly description: "Value of tax";
                                            readonly type: "number";
                                        };
                                        readonly amountType: {
                                            readonly description: "If tax is percentage of amount or fixed\n\n`percentage` `fixed`";
                                            readonly type: "string";
                                            readonly enum: readonly ["percentage", "fixed"];
                                        };
                                        readonly type: {
                                            readonly description: "If tax is included or not in final price\n\n`exclusive` `inclusive`";
                                            readonly type: "string";
                                            readonly enum: readonly ["exclusive", "inclusive"];
                                        };
                                    };
                                };
                            };
                            readonly fees: {
                                readonly description: "";
                                readonly type: "array";
                                readonly items: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly feeID: {
                                            readonly description: "ID of fee";
                                            readonly type: "integer";
                                        };
                                        readonly name: {
                                            readonly description: "Name of fee";
                                            readonly type: "string";
                                        };
                                        readonly amount: {
                                            readonly description: "Value of fee";
                                            readonly type: "number";
                                        };
                                        readonly amountType: {
                                            readonly description: "If fee is percentage of amount or fixed\n\n`percentage` `fixed`";
                                            readonly type: "string";
                                            readonly enum: readonly ["percentage", "fixed"];
                                        };
                                        readonly type: {
                                            readonly description: "If fee is included or not in final price\n\n`exclusive` `inclusive`";
                                            readonly type: "string";
                                            readonly enum: readonly ["exclusive", "inclusive"];
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
                readonly message: {
                    readonly description: "To be used in case any error occurs (if success = false). If success = true, it does not exist.";
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const Gettaxesandfees: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly propertyID: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Property ID";
                };
                readonly includeDeleted: {
                    readonly type: "boolean";
                    readonly default: false;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "If the response should include deleted taxes and fees";
                };
                readonly includeExpired: {
                    readonly type: "boolean";
                    readonly default: false;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "If the response should include expired taxes and fees";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly success: {
                    readonly description: "Returns if the request could be completed";
                    readonly type: "boolean";
                };
                readonly message: {
                    readonly description: "To be used in case any error occurs (if success = false). If success = true, it does not exist.";
                    readonly type: "string";
                };
                readonly data: {
                    readonly description: "Details for the taxes and fees. If success = false, it may not exist.";
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly type: {
                                readonly description: "Type. Fee or tax.\n\n`fee` `tax`";
                                readonly type: "string";
                                readonly enum: readonly ["fee", "tax"];
                            };
                            readonly feeID: {
                                readonly description: "Fee's unique identifier. Only exists if type = fee.";
                                readonly type: "string";
                            };
                            readonly taxID: {
                                readonly description: "Tax's unique identifier. Only exists if type = tax.";
                                readonly type: "string";
                            };
                            readonly name: {
                                readonly description: "Name";
                                readonly type: "string";
                            };
                            readonly code: {
                                readonly description: "Code";
                                readonly type: "string";
                            };
                            readonly amount: {
                                readonly description: "Amount";
                                readonly type: "string";
                            };
                            readonly amountAdult: {
                                readonly description: "Amount charged per adult. Only applicable if amountType = fixed_per_person (Per Person Per Night)";
                                readonly type: "string";
                            };
                            readonly amountChild: {
                                readonly description: "Amount charged per children. Only applicable if amountType = fixed_per_person (Per Person Per Night)";
                                readonly type: "string";
                            };
                            readonly amountRateBased: {
                                readonly description: "Rules defined for Rate-Based taxes/fees. Only applicable if amountType = percentage_rate_based (Rate-based)";
                                readonly type: "array";
                                readonly items: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly rate: {
                                            readonly description: "Maximum rate for which this amount is valid";
                                            readonly oneOf: readonly [{
                                                readonly type: "string";
                                            }, {
                                                readonly type: "number";
                                            }];
                                        };
                                        readonly percentage: {
                                            readonly description: "Percentage applied for the rate";
                                            readonly oneOf: readonly [{
                                                readonly type: "string";
                                            }, {
                                                readonly type: "number";
                                            }];
                                        };
                                    };
                                };
                            };
                            readonly amountType: {
                                readonly description: "Amount type. They mean:<br/> <table> <tr><th>Value</th><th>Meaning</th></tr> <tr><td>percentage</td><td>Percentage of Total Amount</td></tr> <tr><td>fixed</td><td>Fixed per Room Night / Item</td></tr> <tr><td>fixed_per_person</td><td>Fixed per Person per Night</td></tr> <tr><td>fixed_per_accomodation</td><td>Fixed per Accomodation</td></tr> <tr><td>fixed_per_reservation</td><td>Fixed per Reservation</td></tr> <tr><td>percentage_rate_based</td><td>Rate-based</td></tr> </table>\n\n`percentage` `fixed` `fixed_per_person` `fixed_per_accomodation` `fixed_per_reservation` `percentage_rate_based`";
                                readonly type: "string";
                                readonly enum: readonly ["percentage", "fixed", "fixed_per_person", "fixed_per_accomodation", "fixed_per_reservation", "percentage_rate_based"];
                            };
                            readonly availableFor: {
                                readonly description: "Where this tax/fee is available?<br/>They mean:<br/> <table> <tr><th>Value</th><th>Meaning</th></tr> <tr><td>product</td><td>Items</td></tr> <tr><td>rate</td><td>Reservations</td></tr> <tr><td>fee</td><td>Fees -- this tax is charged on top of some fees</td></tr> </table>";
                                readonly type: "array";
                                readonly items: {
                                    readonly type: "string";
                                    readonly enum: readonly ["product", "rate", "fee"];
                                    readonly description: "`product` `rate` `fee`";
                                };
                            };
                            readonly feesCharged: {
                                readonly description: "List of Fee IDs charged by the current tax. Only exists if type = tax.";
                                readonly type: "array";
                                readonly items: {
                                    readonly type: "string";
                                };
                            };
                            readonly inclusiveOrExclusive: {
                                readonly description: "If this tax/fee is inclusive or exclusive\n\n`inclusive` `exclusive`";
                                readonly type: "string";
                                readonly enum: readonly ["inclusive", "exclusive"];
                            };
                            readonly isDeleted: {
                                readonly description: "Flag indicating if tax was deleted from the system";
                                readonly type: "boolean";
                            };
                            readonly childId: {
                                readonly description: "ID of the tax or fee that replaced current one";
                                readonly type: "string";
                            };
                            readonly createdAt: {
                                readonly description: "Date when tax or fee was created in the system";
                                readonly type: "string";
                            };
                            readonly expiredAt: {
                                readonly description: "Date when tax or fee was expired";
                                readonly type: "string";
                            };
                            readonly roomTypes: {
                                readonly description: "Room types this tax/fee applies to";
                                readonly type: "array";
                                readonly items: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly roomTypeID: {
                                            readonly description: "Room type's unique identifier";
                                            readonly type: "string";
                                        };
                                        readonly roomTypeName: {
                                            readonly description: "Room type name";
                                            readonly type: "string";
                                        };
                                    };
                                };
                            };
                            readonly dateRanges: {
                                readonly description: "Date ranges when this tax/fee is applicable";
                                readonly type: "array";
                                readonly items: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly range: {
                                            readonly description: "ISO 8601 date range. It can be in the format YYYY-MM-DD/YYYY-MM-DD or YYYY-MM-DD/ (to indicate that the end date is not defined). In case of empty year the format is --MM-DD/--MM-DD";
                                            readonly type: "object";
                                            readonly additionalProperties: true;
                                        };
                                        readonly amount: {
                                            readonly description: "Amount";
                                            readonly oneOf: readonly [{
                                                readonly type: "string";
                                            }, {
                                                readonly type: "number";
                                            }];
                                        };
                                        readonly amountAdult: {
                                            readonly description: "Amount charged per adult. Only applicable if amountType = fixed_per_person (Per Person Per Night)";
                                            readonly oneOf: readonly [{
                                                readonly type: "string";
                                            }, {
                                                readonly type: "number";
                                            }];
                                        };
                                        readonly amountChild: {
                                            readonly description: "Amount charged per children. Only applicable if amountType = fixed_per_person (Per Person Per Night)";
                                            readonly oneOf: readonly [{
                                                readonly type: "string";
                                            }, {
                                                readonly type: "number";
                                            }];
                                        };
                                        readonly amountRateBased: {
                                            readonly description: "Rules defined for Rate-Based taxes/fees. Only applicable if amountType = percentage_rate_based (Rate-based)";
                                            readonly type: "array";
                                            readonly items: {
                                                readonly type: "object";
                                                readonly properties: {
                                                    readonly rate: {
                                                        readonly description: "Maximum rate for which this amount is valid";
                                                        readonly oneOf: readonly [{
                                                            readonly type: "string";
                                                        }, {
                                                            readonly type: "number";
                                                        }];
                                                    };
                                                    readonly percentage: {
                                                        readonly description: "Percentage applied for the rate";
                                                        readonly oneOf: readonly [{
                                                            readonly type: "string";
                                                        }, {
                                                            readonly type: "number";
                                                        }];
                                                    };
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
                readonly total: {
                    readonly description: "Total number of results";
                    readonly type: "integer";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const Getusers: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly property_ids: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Property numeric identifiers (comma-separated, i.e. 37,345,89)";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly success: {
                    readonly description: "Returns if the request could be completed";
                    readonly type: "boolean";
                };
                readonly data: {
                    readonly description: "Details for the users";
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly userID: {
                                readonly description: "User ID";
                                readonly type: "string";
                            };
                            readonly firstName: {
                                readonly description: "First Name";
                                readonly type: "string";
                            };
                            readonly lastName: {
                                readonly description: "Last Name";
                                readonly type: "string";
                            };
                            readonly email: {
                                readonly description: "Email";
                                readonly type: "string";
                            };
                            readonly language: {
                                readonly description: "User Language|Property Default Language. See the full list of available language parameters <a target=\"_blank\" href=\"https://integrations.cloudbeds.com/hc/en-us/articles/360007144993-FAQ#methods-and-parameters\">here</a>";
                                readonly type: "string";
                            };
                            readonly userRole: {
                                readonly description: "Details for the role";
                                readonly type: "object";
                                readonly properties: {
                                    readonly name: {
                                        readonly description: "Role's name";
                                        readonly type: "string";
                                    };
                                    readonly description: {
                                        readonly description: "Role's description";
                                        readonly type: "string";
                                    };
                                };
                            };
                            readonly active: {
                                readonly description: "\n\n`yes` `no`";
                                readonly type: "string";
                                readonly enum: readonly ["yes", "no"];
                            };
                            readonly lastLogin: {
                                readonly description: "Date and time of the last login event";
                                readonly type: "string";
                                readonly format: "date";
                            };
                            readonly propertyId: {
                                readonly description: "Property numeric identifier";
                                readonly type: "string";
                            };
                            readonly organizationID: {
                                readonly description: "Organization ID";
                                readonly type: "string";
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const Getwebhooks: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly propertyID: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "Property ID";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly success: {
                    readonly description: "Returns if the request could be completed";
                    readonly type: "boolean";
                };
                readonly data: {
                    readonly description: "";
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly id: {
                                readonly description: "Subscription ID";
                                readonly type: "string";
                            };
                            readonly key: {
                                readonly description: "Subscription Key object (User, Property or Association and it's ID)";
                                readonly type: "object";
                                readonly properties: {
                                    readonly type: {
                                        readonly description: "Subscription Key type\n\n`user` `property` `association`";
                                        readonly type: "string";
                                        readonly enum: readonly ["user", "property", "association"];
                                    };
                                    readonly id: {
                                        readonly description: "Subscription Key ID";
                                        readonly type: "string";
                                    };
                                };
                            };
                            readonly event: {
                                readonly description: "Event for which the subscription was created";
                                readonly type: "object";
                                readonly properties: {
                                    readonly entity: {
                                        readonly description: "Entity which the event belongs to";
                                        readonly type: "string";
                                    };
                                    readonly action: {
                                        readonly description: "Action which the event represents";
                                        readonly type: "string";
                                    };
                                };
                            };
                            readonly owner: {
                                readonly description: "Subscription Owner object (User, API Client, etc, and it's ID)";
                                readonly type: "object";
                                readonly properties: {
                                    readonly type: {
                                        readonly description: "Subscription Owner type";
                                        readonly type: "string";
                                    };
                                    readonly id: {
                                        readonly description: "Subscription Owner ID";
                                        readonly type: "string";
                                    };
                                };
                            };
                            readonly subscriptionType: {
                                readonly description: "Subscription Type (Webhook)";
                                readonly type: "string";
                            };
                            readonly subscriptionData: {
                                readonly description: "Data used on the subscription. For webhooks, just the endpoint URL.";
                                readonly type: "object";
                                readonly properties: {
                                    readonly endpoint: {
                                        readonly description: "The endpoint";
                                        readonly type: "string";
                                    };
                                };
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostAccessToken: {
    readonly formData: {
        readonly type: "object";
        readonly properties: {
            readonly grant_type: {
                readonly description: "The OAuth2 grant type.";
                readonly type: "string";
                readonly enum: readonly ["authorization_code", "refresh_token", "urn:ietf:params:oauth:grant-type:api-key"];
            };
            readonly client_id: {
                readonly description: "The client identifier. Each client must be provisioned an identifier.";
                readonly type: "string";
            };
            readonly client_secret: {
                readonly description: "The client secret. Each client must be provisioned a secret.";
                readonly type: "string";
            };
            readonly redirect_uri: {
                readonly description: "The client pre-configured redirect URI. (Required for grant type 'authorization_code' and 'urn:ietf:params:oauth:grant-type:api-key').";
                readonly type: "string";
            };
            readonly code: {
                readonly description: "An authorization code provisioned by /oauth (Required for grant type 'authorization_code' and 'urn:ietf:params:oauth:grant-type:api-key').";
                readonly type: "string";
            };
            readonly refresh_token: {
                readonly description: "A refresh token to renew an access_token (Required for grant type 'refresh_token' only).";
                readonly type: "string";
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly access_token: {
                    readonly description: "Authenticated access token.";
                    readonly type: "string";
                };
                readonly token_type: {
                    readonly description: "The type of the access token authenticated.";
                    readonly type: "string";
                };
                readonly expires_in: {
                    readonly description: "The expiration time of the access token in seconds.";
                    readonly type: "integer";
                };
                readonly refresh_token: {
                    readonly description: "A token to refresh your access token without performing the full auth flow.";
                    readonly type: "string";
                };
                readonly resources: {
                    readonly description: "List of resources associated with the token during consent";
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly type: {
                                readonly description: "A type of associated resource\n\n`property` `association`";
                                readonly type: "string";
                                readonly enum: readonly ["property", "association"];
                            };
                            readonly id: {
                                readonly description: "Unique ID of associated resource";
                                readonly type: "string";
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostAppendcustomitem: {
    readonly formData: {
        readonly type: "object";
        readonly properties: {
            readonly propertyID: {
                readonly description: "Property ID";
                readonly type: "string";
            };
            readonly reservationID: {
                readonly description: "Reservation identifier. Required if no houseAccountID is provided.";
                readonly type: "string";
            };
            readonly referenceID: {
                readonly description: "partner's transaction reference. If exist then Cloudbeds will prevent adding of duplicates";
                readonly type: "string";
            };
            readonly subReservationID: {
                readonly description: "Sub Reservation identifier";
                readonly type: "string";
            };
            readonly roomID: {
                readonly description: "Room identifier (Ignored if subReservationID exist)";
                readonly type: "string";
            };
            readonly items: {
                readonly description: "list of items will be posted";
                readonly type: "array";
                readonly items: {
                    readonly type: "object";
                    readonly properties: {
                        readonly appItemID: {
                            readonly description: "Identifier of item. Future calls using the same ID will use previously sent item name and description. Item name/description sent in new request will be ignored.";
                            readonly type: "string";
                        };
                        readonly itemSKU: {
                            readonly description: "Item SKU identifier";
                            readonly type: "string";
                        };
                        readonly itemQuantity: {
                            readonly description: "Items quantity";
                            readonly type: "integer";
                        };
                        readonly itemPrice: {
                            readonly description: "Item price";
                            readonly type: "number";
                        };
                        readonly itemName: {
                            readonly description: "Item name";
                            readonly type: "string";
                        };
                        readonly itemCategoryName: {
                            readonly description: "Item category name";
                            readonly type: "string";
                        };
                        readonly itemNote: {
                            readonly description: "Item note";
                            readonly type: "string";
                        };
                        readonly itemTaxes: {
                            readonly description: "list of taxes applied to item";
                            readonly type: "array";
                            readonly items: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly taxName: {
                                        readonly description: "tax name";
                                        readonly type: "string";
                                    };
                                    readonly taxValue: {
                                        readonly description: "tax value";
                                        readonly type: "number";
                                    };
                                };
                            };
                        };
                        readonly itemFees: {
                            readonly description: "list of fees applied to item";
                            readonly type: "array";
                            readonly items: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly feeName: {
                                        readonly description: "fee name";
                                        readonly type: "string";
                                    };
                                    readonly feeValue: {
                                        readonly description: "fee value";
                                        readonly type: "number";
                                    };
                                };
                            };
                        };
                    };
                };
            };
            readonly saleDate: {
                readonly description: "posting date";
                readonly type: "string";
                readonly format: "date-time";
                readonly default: "current_timestamp";
            };
            readonly guestID: {
                readonly description: "Guest identifier";
                readonly type: "string";
            };
            readonly guestName: {
                readonly description: "(Ignored if guestID exist)";
                readonly type: "string";
            };
            readonly payments: {
                readonly description: "list of payments If the item is already paid";
                readonly type: "array";
                readonly items: {
                    readonly type: "object";
                    readonly properties: {
                        readonly paymentType: {
                            readonly description: "Payment method. Use the call [getPaymentMethods](#api-Payment-getPaymentMethods) to get the properties enabled payment methods.";
                            readonly type: "string";
                        };
                        readonly cardType: {
                            readonly description: "When paymentType is cards or credit, the cardType could be specified (visa, master etc.). The list of types can be found with [getPaymentMethods](#api-Payment-getPaymentMethods) (cardCode inside cardTypes). If omitted, payment is treated as Credit Card Without Details.";
                            readonly type: "string";
                        };
                        readonly amount: {
                            readonly description: "payment amount";
                            readonly type: "number";
                        };
                        readonly notes: {
                            readonly description: "payment note";
                            readonly type: "string";
                        };
                    };
                };
            };
            readonly itemPaid: {
                readonly description: "If the item is already paid. Note: If set to true, a payment in cash will be registered for the total value of the item, taxes and fees. If this is not the expected behavior, set to false, and register the operation manually. (Ignored if payments array exist)";
                readonly type: "boolean";
                readonly default: false;
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly success: {
                    readonly description: "Returns if the request could be completed";
                    readonly type: "boolean";
                };
                readonly data: {
                    readonly description: "Sold product details";
                    readonly type: "object";
                    readonly properties: {
                        readonly soldProductID: {
                            readonly description: "Sold product identifier (Usable to void this product in future).";
                            readonly type: "string";
                        };
                        readonly transactionID: {
                            readonly description: "Transaction identifier";
                            readonly type: "string";
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostCreateallotmentblock: {
    readonly formData: {
        readonly type: "object";
        readonly properties: {
            readonly groupCode: {
                readonly description: "The unique identifier of the group profile the allotment block should be created";
                readonly type: "string";
            };
            readonly allotmentBlockName: {
                readonly description: "The name for the allotment block";
                readonly type: "string";
            };
            readonly rateType: {
                readonly description: "The rate type for the associated intervals";
                readonly type: "string";
                readonly enum: readonly ["base_rate", "rate_plan", "custom"];
            };
            readonly ratePlanId: {
                readonly description: "The rate plan ID. Required if rateType is \"rate_plan\".";
                readonly type: "string";
            };
            readonly allotmentType: {
                readonly description: "The allotment type";
                readonly type: "string";
                readonly enum: readonly ["allotment", "based_on_availability"];
            };
            readonly allotmentBlockStatus: {
                readonly description: "The status for the allotment block under";
                readonly type: "string";
                readonly enum: readonly ["definite", "tentative", "lead"];
            };
            readonly allowOverbooking: {
                readonly description: "If false, or omitted, then this command will fail if it would result in an overbooking.  If true, then the update will succeed even if it results in an overbooking.";
                readonly type: "boolean";
            };
            readonly autoRelease: {
                readonly description: "Optional auto-release configuration";
                readonly type: "object";
                readonly properties: {
                    readonly releaseType: {
                        readonly description: "The type of auto-release";
                        readonly type: "string";
                        readonly enum: readonly ["all_dates", "by_day", "by_interval"];
                    };
                    readonly days: {
                        readonly description: "The number of days prior to the end of the allotment block to begin releasing dates from the allotment block";
                        readonly type: "integer";
                    };
                    readonly releaseTime: {
                        readonly description: "The hour to being the auto-release in HH:00 format, e.g. '00:00', '01:00'...";
                        readonly type: "string";
                    };
                };
            };
            readonly allotmentIntervals: {
                readonly description: "The day-based data for the allotment block.";
                readonly type: "array";
                readonly items: {
                    readonly type: "object";
                    readonly properties: {
                        readonly availability: {
                            readonly description: "";
                            readonly type: "array";
                            readonly items: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly date: {
                                        readonly description: "the day within the interval (YYYY-MM-DD)";
                                        readonly type: "string";
                                        readonly format: "date";
                                    };
                                    readonly blockAllotted: {
                                        readonly description: "Total number of units available for the";
                                        readonly type: "integer";
                                    };
                                    readonly rate: {
                                        readonly description: "the price if applicable";
                                        readonly type: "string";
                                    };
                                    readonly guestPricing: {
                                        readonly description: "Guest pricing data if applicable. Note: the number of applicable keys varies here based on the occupancy settings for the room type.";
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly adult1: {
                                                readonly description: "Price for adult 1";
                                                readonly type: "string";
                                            };
                                            readonly adult2: {
                                                readonly description: "Price for adult 2";
                                                readonly type: "string";
                                            };
                                            readonly adult3: {
                                                readonly description: "Price for adult 3";
                                                readonly type: "string";
                                            };
                                            readonly child1: {
                                                readonly description: "Price for child 1";
                                                readonly type: "string";
                                            };
                                            readonly child2: {
                                                readonly description: "Price for child 2";
                                                readonly type: "string";
                                            };
                                            readonly child3: {
                                                readonly description: "Price for child 3";
                                                readonly type: "string";
                                            };
                                        };
                                    };
                                    readonly restrictions: {
                                        readonly description: "Interval restrictions if applicable";
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly minLos: {
                                                readonly description: "Minimum length of stay requirement";
                                                readonly type: "integer";
                                            };
                                            readonly maxLos: {
                                                readonly description: "Maximum length of stay requirement";
                                                readonly type: "integer";
                                            };
                                            readonly cutOffDays: {
                                                readonly description: "How many days before arrival should guests be required to book";
                                                readonly type: "integer";
                                            };
                                            readonly lastMinuteBookingDays: {
                                                readonly description: "How many days before the arrival guests are allowed to book";
                                                readonly type: "integer";
                                            };
                                            readonly closedToArrival: {
                                                readonly description: "If the interval dates are closed for arrival";
                                                readonly type: "integer";
                                            };
                                            readonly closedToDeparture: {
                                                readonly description: "If the interval dates are closed for departure";
                                                readonly type: "integer";
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly startDate: {
                    readonly description: "Date on or after which each returned allotmentBlock applies";
                    readonly type: "string";
                    readonly format: "date";
                };
                readonly endDate: {
                    readonly description: "Date on or before which each returned allotmentBlock applies";
                    readonly type: "string";
                    readonly format: "date";
                };
                readonly success: {
                    readonly description: "Returns if the request could be completed";
                    readonly type: "boolean";
                };
                readonly data: {
                    readonly description: "Allotment Blocks";
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly propertyID: {
                                readonly description: "Property ID associated to the allotment block";
                                readonly type: "string";
                            };
                            readonly allotmentBlockCode: {
                                readonly description: "Allotment block code";
                                readonly type: "string";
                            };
                            readonly allotmentBlockStatus: {
                                readonly description: "Allotment block status";
                                readonly type: "string";
                            };
                            readonly allotmentBlockName: {
                                readonly description: "Allotment block name";
                                readonly type: "string";
                            };
                            readonly allotmentBlockId: {
                                readonly description: "Allotment block ID";
                                readonly type: "string";
                            };
                            readonly rateType: {
                                readonly description: "Rate type for the allotment block";
                                readonly type: "string";
                            };
                            readonly ratePlanId: {
                                readonly description: "Rate plan ID if applicable";
                                readonly type: "string";
                            };
                            readonly allotmentType: {
                                readonly description: "the type of allotment block";
                                readonly type: "string";
                            };
                            readonly groupId: {
                                readonly description: "Group profile ID associated to the allotment block";
                                readonly type: "string";
                            };
                            readonly groupCode: {
                                readonly description: "Group profile code associated to the allotment block";
                                readonly type: "string";
                            };
                            readonly isAutoRelease: {
                                readonly description: "If the allotment block is configured for auto-release";
                                readonly type: "boolean";
                            };
                            readonly autoRelease: {
                                readonly description: "auto-release data if applicable";
                                readonly type: "object";
                                readonly properties: {
                                    readonly releaseType: {
                                        readonly description: "The type of auto-release\n\n`all_dates` `by_day` `by_interval`";
                                        readonly type: "string";
                                        readonly enum: readonly ["all_dates", "by_day", "by_interval"];
                                    };
                                    readonly days: {
                                        readonly description: "The number of days prior to the end of the allotment block to begin releasing dates from the allotment block";
                                        readonly type: "integer";
                                    };
                                    readonly releaseTime: {
                                        readonly description: "The hour to being the auto-release in HH:00 format, e.g. '00:00', '01:00'...";
                                        readonly type: "string";
                                    };
                                };
                            };
                            readonly allotmentIntervals: {
                                readonly description: "array of interval data by room type";
                                readonly type: "array";
                                readonly items: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly roomTypeId: {
                                            readonly description: "Room type ID";
                                            readonly type: "string";
                                        };
                                        readonly startDate: {
                                            readonly description: "Interval start date";
                                            readonly type: "string";
                                            readonly format: "date";
                                        };
                                        readonly endDate: {
                                            readonly description: "Interval end date";
                                            readonly type: "string";
                                            readonly format: "date";
                                        };
                                        readonly availability: {
                                            readonly description: "Interval availability data by day in interval";
                                            readonly type: "object";
                                            readonly properties: {
                                                readonly date: {
                                                    readonly description: "Day within interval";
                                                    readonly type: "string";
                                                    readonly format: "date";
                                                };
                                                readonly blockRemaining: {
                                                    readonly description: "Number of units remaining for the room type for this day";
                                                    readonly type: "integer";
                                                };
                                                readonly blockAllotted: {
                                                    readonly description: "Total number of units available for the room type for this day";
                                                    readonly type: "integer";
                                                };
                                                readonly blockConfirmed: {
                                                    readonly description: "Number of units booked for the room type for this day";
                                                    readonly type: "integer";
                                                };
                                                readonly rate: {
                                                    readonly description: "the price";
                                                    readonly type: "string";
                                                };
                                                readonly guestPricing: {
                                                    readonly description: "Guest pricing data if applicable. Note: the number of results varies here based on the occupancy settings and custom guest pricing for the room type.";
                                                    readonly type: "object";
                                                    readonly properties: {
                                                        readonly adult1: {
                                                            readonly description: "Price for adult 1";
                                                            readonly type: "string";
                                                        };
                                                        readonly adult2: {
                                                            readonly description: "Price for adult 2";
                                                            readonly type: "string";
                                                        };
                                                        readonly adult3: {
                                                            readonly description: "Price for adult 3";
                                                            readonly type: "string";
                                                        };
                                                        readonly child1: {
                                                            readonly description: "Price for child 1";
                                                            readonly type: "string";
                                                        };
                                                        readonly child2: {
                                                            readonly description: "Price for child 2";
                                                            readonly type: "string";
                                                        };
                                                        readonly child3: {
                                                            readonly description: "Price for child 3";
                                                            readonly type: "string";
                                                        };
                                                    };
                                                };
                                            };
                                        };
                                        readonly restrictions: {
                                            readonly description: "Interval restrictions if applicable";
                                            readonly type: "object";
                                            readonly properties: {
                                                readonly minLos: {
                                                    readonly description: "Minimum length of stay requirement";
                                                    readonly type: "integer";
                                                };
                                                readonly maxLos: {
                                                    readonly description: "Maximum length of stay requirement";
                                                    readonly type: "integer";
                                                };
                                                readonly cutOffDays: {
                                                    readonly description: "How many days before arrival should the guests be required to book";
                                                    readonly type: "integer";
                                                };
                                                readonly lastMinuteBookingDays: {
                                                    readonly description: "Hoe many days before the arrival guests are allowed to book";
                                                    readonly type: "integer";
                                                };
                                                readonly closedToArrival: {
                                                    readonly description: "If the interval dates are closed for arrival";
                                                    readonly type: "integer";
                                                };
                                                readonly closedToDeparture: {
                                                    readonly description: "If the interval dates are closed for departure";
                                                    readonly type: "integer";
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostCreateallotmentblocknotes: {
    readonly formData: {
        readonly type: "object";
        readonly properties: {
            readonly propertyID: {
                readonly description: "Property ID";
                readonly type: "string";
            };
            readonly allotmentBlockCode: {
                readonly description: "Allotment Block Code";
                readonly type: "string";
            };
            readonly text: {
                readonly description: "Note's text";
                readonly type: "string";
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly success: {
                    readonly description: "Returns if the request could be completed";
                    readonly type: "boolean";
                };
                readonly data: {
                    readonly description: "The created note";
                    readonly type: "object";
                    readonly properties: {
                        readonly id: {
                            readonly description: "Note ID";
                            readonly type: "string";
                        };
                        readonly text: {
                            readonly description: "Note contents";
                            readonly type: "string";
                        };
                        readonly createdBy: {
                            readonly description: "User Name";
                            readonly type: "string";
                        };
                        readonly createdAt: {
                            readonly description: "Creation datetime (format: Y-m-d H:i:s)";
                            readonly type: "string";
                            readonly format: "date-time";
                        };
                        readonly updatedAt: {
                            readonly description: "Last modification datetime  (format: Y-m-d H:i:s)";
                            readonly type: "string";
                            readonly format: "date-time";
                        };
                        readonly archivedAt: {
                            readonly description: "Archival datetime (format: Y-m-d H:i:s)";
                            readonly type: "string";
                            readonly format: "date-time";
                        };
                        readonly status: {
                            readonly description: "Note status";
                            readonly type: "string";
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostDeleteallotmentblock: {
    readonly formData: {
        readonly type: "object";
        readonly properties: {
            readonly allotmentBlockCode: {
                readonly description: "The unique code of the allotment Block";
                readonly type: "string";
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly success: {
                    readonly description: "Returns if the request could be completed";
                    readonly type: "boolean";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostDeleteapppropertysettings: {
    readonly formData: {
        readonly type: "object";
        readonly properties: {
            readonly propertyID: {
                readonly description: "Key";
                readonly type: "string";
            };
            readonly key: {
                readonly description: "Key";
                readonly type: "string";
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly success: {
                    readonly description: "Success";
                    readonly type: "boolean";
                };
                readonly message: {
                    readonly description: "Response message";
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostPatchgroup: {
    readonly formData: {
        readonly type: "object";
        readonly properties: {
            readonly groupCode: {
                readonly description: "code for a group";
                readonly type: "string";
            };
            readonly propertyID: {
                readonly description: "Property ID";
                readonly type: "string";
            };
            readonly name: {
                readonly description: "Name for a group";
                readonly type: "string";
            };
            readonly type: {
                readonly description: "The type of group";
                readonly type: "string";
                readonly enum: readonly ["group", "company", "travel_agent", "wholesaler"];
            };
            readonly status: {
                readonly description: "Group status";
                readonly type: "string";
                readonly enum: readonly ["open", "closed"];
            };
            readonly sourceID: {
                readonly description: "Source ID for a group";
                readonly type: "string";
            };
            readonly address1: {
                readonly description: "Address line 1 for a group";
                readonly type: "string";
            };
            readonly address2: {
                readonly description: "Address line 2 for a group";
                readonly type: "string";
            };
            readonly city: {
                readonly description: "City for a group";
                readonly type: "string";
            };
            readonly zip: {
                readonly description: "Zip for a group";
                readonly type: "string";
            };
            readonly state: {
                readonly description: "State for a group";
                readonly type: "string";
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly success: {
                    readonly description: "Success";
                    readonly type: "boolean";
                };
                readonly data: {
                    readonly description: "Data";
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly groupCode: {
                                readonly description: "Unique ID for a group";
                                readonly type: "string";
                            };
                            readonly name: {
                                readonly description: "The name of the group";
                                readonly type: "string";
                            };
                            readonly type: {
                                readonly description: "The type of the group\n\n`group` `company` `travel_agent` `wholesaler`";
                                readonly type: "string";
                                readonly enum: readonly ["group", "company", "travel_agent", "wholesaler"];
                            };
                            readonly status: {
                                readonly description: "Group status\n\n`open` `closed`";
                                readonly type: "string";
                                readonly enum: readonly ["open", "closed"];
                            };
                            readonly created: {
                                readonly description: "Group created time";
                                readonly type: "string";
                                readonly format: "date-time";
                            };
                            readonly sourceID: {
                                readonly description: "The third-party source ID for this group, can be null";
                                readonly type: "string";
                            };
                            readonly address1: {
                                readonly description: "Address";
                                readonly type: "string";
                            };
                            readonly address2: {
                                readonly description: "Address2";
                                readonly type: "string";
                            };
                            readonly city: {
                                readonly description: "City";
                                readonly type: "string";
                            };
                            readonly zip: {
                                readonly description: "Zip";
                                readonly type: "string";
                            };
                            readonly state: {
                                readonly description: "State";
                                readonly type: "string";
                            };
                            readonly id: {
                                readonly description: "ID";
                                readonly type: "string";
                            };
                            readonly property_id: {
                                readonly description: "Property Id";
                                readonly type: "string";
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostPatchinvoice: {
    readonly formData: {
        readonly type: "object";
        readonly properties: {
            readonly propertyID: {
                readonly description: "Property ID";
                readonly type: "string";
            };
            readonly invoiceID: {
                readonly description: "Invoice unique ID";
                readonly type: "string";
            };
            readonly status: {
                readonly description: "Desired new invoice status";
                readonly type: "string";
                readonly enum: readonly ["open", "paid", "failed", "voided", "rejected"];
            };
            readonly file: {
                readonly description: "Form-based Credit Notes PDF File.<br/> Allowed file types: <code>*.pdf, *.rtf, *.doc, *.docx, *.txt, *.jpg, *.jpeg, *.png, *.gif, *.csv, *.xls, *.xlsx, *.xml</code><br/> Allowed max file size: 10MB<br/> <i>Not required for `failed` status</i>";
                readonly type: "string";
                readonly format: "binary";
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly success: {
                    readonly description: "Returns if the request could be completed";
                    readonly type: "boolean";
                };
                readonly message: {
                    readonly description: "To be used in case any error occurs (if success = false). If success = true, it does not exist.";
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostPatchrate: {
    readonly formData: {
        readonly type: "object";
        readonly properties: {
            readonly rates: {
                readonly description: "Array of rates to update";
                readonly type: "array";
                readonly items: {
                    readonly type: "object";
                    readonly properties: {
                        readonly rateID: {
                            readonly description: "Rate ID";
                            readonly type: "string";
                        };
                        readonly interval: {
                            readonly description: "Rate update details";
                            readonly type: "object";
                            readonly properties: {
                                readonly startDate: {
                                    readonly description: "Interval Start date. Format: YYYY-MM-DD";
                                    readonly type: "string";
                                    readonly format: "date";
                                };
                                readonly endDate: {
                                    readonly description: "Interval End date. Format: YYYY-MM-DD";
                                    readonly type: "string";
                                    readonly format: "date";
                                };
                                readonly rate: {
                                    readonly description: "Base rate for the selected date";
                                    readonly type: "number";
                                };
                                readonly maxLos: {
                                    readonly description: "Maximum length of stay for the selected date.";
                                    readonly type: "integer";
                                };
                                readonly minLos: {
                                    readonly description: "Minimum length of stay for the selected date.";
                                    readonly type: "integer";
                                };
                                readonly closedToArrival: {
                                    readonly description: "Whether it is closed to arrival.";
                                    readonly type: "boolean";
                                };
                                readonly closedToDeparture: {
                                    readonly description: "Whether it is closed to departure.";
                                    readonly type: "boolean";
                                };
                                readonly cutOff: {
                                    readonly description: "Cut off time for the selected date.";
                                    readonly type: "integer";
                                };
                                readonly lastMinuteBooking: {
                                    readonly description: "Last minute bookings.";
                                    readonly type: "integer";
                                };
                                readonly blocked: {
                                    readonly description: "Whether the accommodation is blocked.";
                                    readonly type: "boolean";
                                };
                                readonly guestPricing: {
                                    readonly description: "Guest pricing data if applicable. Note: the number of applicable keys varies here based on the occupancy settings for the room type.";
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly adult1: {
                                            readonly description: "Price for adult 1";
                                            readonly type: "string";
                                        };
                                        readonly adult2: {
                                            readonly description: "Price for adult 2";
                                            readonly type: "string";
                                        };
                                        readonly adult3: {
                                            readonly description: "Price for adult 3";
                                            readonly type: "string";
                                        };
                                        readonly child1: {
                                            readonly description: "Price for child 1";
                                            readonly type: "string";
                                        };
                                        readonly child2: {
                                            readonly description: "Price for child 2";
                                            readonly type: "string";
                                        };
                                        readonly child3: {
                                            readonly description: "Price for child 3";
                                            readonly type: "string";
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly success: {
                    readonly description: "Returns true if the request could be completed";
                    readonly type: "boolean";
                };
                readonly jobReferenceID: {
                    readonly description: "ReferenceId ID for the job created for this update.  This can be used to track success of the batch for this rate update. See getRateJobs or the Rate Batch Job Webhook";
                    readonly type: "string";
                };
                readonly message: {
                    readonly description: "To be used in case any error occurs (if success = false). If success = true, it does not exist.";
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostPutapppropertysettings: {
    readonly formData: {
        readonly type: "object";
        readonly properties: {
            readonly propertyID: {
                readonly description: "Property ID";
                readonly type: "string";
            };
            readonly key: {
                readonly description: "Key";
                readonly type: "string";
            };
            readonly value: {
                readonly description: "Value";
                readonly type: "string";
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly success: {
                    readonly description: "Success";
                    readonly type: "boolean";
                };
                readonly data: {
                    readonly description: "Data";
                    readonly type: "object";
                    readonly properties: {
                        readonly id: {
                            readonly description: "ID";
                            readonly type: "string";
                        };
                        readonly key: {
                            readonly description: "Key";
                            readonly type: "string";
                        };
                        readonly value: {
                            readonly description: "Value";
                            readonly type: "string";
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostPutgroup: {
    readonly formData: {
        readonly type: "object";
        readonly properties: {
            readonly propertyID: {
                readonly description: "Property ID";
                readonly type: "string";
            };
            readonly name: {
                readonly description: "Name for a group";
                readonly type: "string";
            };
            readonly type: {
                readonly description: "The type of group";
                readonly type: "string";
                readonly enum: readonly ["group", "company", "travel_agent", "wholesaler"];
            };
            readonly status: {
                readonly description: "Group status";
                readonly type: "string";
                readonly enum: readonly ["open", "closed"];
            };
            readonly commissionType: {
                readonly description: "Commission Type";
                readonly type: "string";
                readonly enum: readonly ["fixed", "percent"];
            };
            readonly sourceID: {
                readonly description: "Source ID for a group";
                readonly type: "string";
            };
            readonly address1: {
                readonly description: "Address line 1 for a group";
                readonly type: "string";
            };
            readonly address2: {
                readonly description: "Address line 2 for a group";
                readonly type: "string";
            };
            readonly city: {
                readonly description: "City for a group";
                readonly type: "string";
            };
            readonly zip: {
                readonly description: "Zip for a group";
                readonly type: "string";
            };
            readonly state: {
                readonly description: "State for a group";
                readonly type: "string";
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly success: {
                    readonly description: "Success";
                    readonly type: "boolean";
                };
                readonly data: {
                    readonly description: "Data";
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly groupCode: {
                                readonly description: "Unique ID for a group";
                                readonly type: "string";
                            };
                            readonly name: {
                                readonly description: "The name of the group";
                                readonly type: "string";
                            };
                            readonly type: {
                                readonly description: "The type of the group\n\n`group` `company` `travel_agent` `wholesaler`";
                                readonly type: "string";
                                readonly enum: readonly ["group", "company", "travel_agent", "wholesaler"];
                            };
                            readonly status: {
                                readonly description: "Group status\n\n`open` `closed`";
                                readonly type: "string";
                                readonly enum: readonly ["open", "closed"];
                            };
                            readonly created: {
                                readonly description: "Group created time";
                                readonly type: "string";
                                readonly format: "date-time";
                            };
                            readonly sourceID: {
                                readonly description: "The third-party source ID for this group, can be null";
                                readonly type: "string";
                            };
                            readonly address1: {
                                readonly description: "Address";
                                readonly type: "string";
                            };
                            readonly address2: {
                                readonly description: "Address2";
                                readonly type: "string";
                            };
                            readonly city: {
                                readonly description: "City";
                                readonly type: "string";
                            };
                            readonly zip: {
                                readonly description: "Zip";
                                readonly type: "string";
                            };
                            readonly state: {
                                readonly description: "State";
                                readonly type: "string";
                            };
                            readonly id: {
                                readonly description: "ID";
                                readonly type: "string";
                            };
                            readonly property_id: {
                                readonly description: "Property Id";
                                readonly type: "string";
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostPutrate: {
    readonly formData: {
        readonly type: "object";
        readonly properties: {
            readonly rates: {
                readonly description: "Array of rates to update";
                readonly type: "array";
                readonly items: {
                    readonly type: "object";
                    readonly properties: {
                        readonly rateID: {
                            readonly description: "Rate ID";
                            readonly type: "string";
                        };
                        readonly interval: {
                            readonly description: "Rate update details";
                            readonly type: "array";
                            readonly items: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly startDate: {
                                        readonly description: "Interval Start date. Format: YYYY-MM-DD";
                                        readonly type: "string";
                                        readonly format: "date";
                                    };
                                    readonly endDate: {
                                        readonly description: "Interval End date. Format: YYYY-MM-DD";
                                        readonly type: "string";
                                        readonly format: "date";
                                    };
                                    readonly rate: {
                                        readonly description: "Base rate for the selected date";
                                        readonly type: "number";
                                    };
                                };
                            };
                        };
                    };
                };
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly success: {
                    readonly description: "Returns true if the request could be completed";
                    readonly type: "boolean";
                };
                readonly jobReferenceID: {
                    readonly description: "ReferenceId ID for the job created for this update.  This can be used to track success of the batch for this rate update. See getRateJobs or the Rate Batch Job Webhook";
                    readonly type: "string";
                };
                readonly message: {
                    readonly description: "To be used in case any error occurs (if success = false). If success = true, it does not exist.";
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostUpdateallotmentblock: {
    readonly formData: {
        readonly type: "object";
        readonly properties: {
            readonly allotmentBlockCode: {
                readonly description: "The allotment block code identifying the allotment block to update";
                readonly type: "string";
            };
            readonly allotmentBlockName: {
                readonly description: "The name for the allotment block";
                readonly type: "string";
            };
            readonly allowOverbooking: {
                readonly description: "If false, or omitted, then this update will fail if it would result in an overbooking.  If true, then the update will succeed even if it results in an overbooking.";
                readonly type: "boolean";
            };
            readonly allotmentType: {
                readonly description: "The allotment type";
                readonly type: "string";
                readonly enum: readonly ["allotment", "based_on_availability"];
            };
            readonly allotmentBlockStatus: {
                readonly description: "The status for the allotment block under";
                readonly type: "string";
                readonly enum: readonly ["definite", "tentative", "lead", "cancelled"];
            };
            readonly autoRelease: {
                readonly description: "Optional auto-release configuration NOTE: pass empty object to remove auto-release configuration";
                readonly type: "object";
                readonly properties: {
                    readonly releaseType: {
                        readonly description: "The type of auto-release";
                        readonly type: "string";
                        readonly enum: readonly ["all_dates", "by_day", "by_interval"];
                    };
                    readonly days: {
                        readonly description: "The number of days prior to the end of the allotment block to begin releasing dates from the allotment block";
                        readonly type: "integer";
                    };
                    readonly releaseTime: {
                        readonly description: "The hour to being the auto-release in HH:00 format, e.g. '00:00', '01:00'...";
                        readonly type: "string";
                    };
                };
            };
            readonly allotmentIntervals: {
                readonly description: "The day-based data for the allotment block.";
                readonly type: "array";
                readonly items: {
                    readonly type: "object";
                    readonly properties: {
                        readonly roomTypeId: {
                            readonly description: "Room type id";
                            readonly type: "string";
                        };
                        readonly availability: {
                            readonly description: "Interval availability data by day in interval";
                            readonly type: "array";
                            readonly items: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly blockAllotted: {
                                        readonly description: "Total number of units available for the room type for this day";
                                        readonly type: "integer";
                                    };
                                    readonly date: {
                                        readonly description: "the day within the interval (YYYY-MM-DD)";
                                        readonly type: "string";
                                        readonly format: "date";
                                    };
                                    readonly rate: {
                                        readonly description: "the price if applicable";
                                        readonly type: "string";
                                    };
                                    readonly guestPricing: {
                                        readonly description: "Guest pricing data if applicable. Note:";
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly adult1: {
                                                readonly description: "Price for adult 1";
                                                readonly type: "string";
                                            };
                                            readonly adult2: {
                                                readonly description: "Price for adult 2";
                                                readonly type: "string";
                                            };
                                            readonly adult3: {
                                                readonly description: "Price for adult 3";
                                                readonly type: "string";
                                            };
                                            readonly child1: {
                                                readonly description: "Price for child 1";
                                                readonly type: "string";
                                            };
                                            readonly child2: {
                                                readonly description: "Price for child 2";
                                                readonly type: "string";
                                            };
                                            readonly child3: {
                                                readonly description: "Price for child 3";
                                                readonly type: "string";
                                            };
                                        };
                                    };
                                    readonly restrictions: {
                                        readonly description: "Interval restrictions if applicable";
                                        readonly type: "object";
                                        readonly properties: {
                                            readonly minLos: {
                                                readonly description: "Minimum length of stay requirement";
                                                readonly type: "integer";
                                            };
                                            readonly maxLos: {
                                                readonly description: "Maximum length of stay requirement";
                                                readonly type: "integer";
                                            };
                                            readonly cutOffDays: {
                                                readonly description: "How many days before arrival should guests be required to book";
                                                readonly type: "integer";
                                            };
                                            readonly lastMinuteBookingDays: {
                                                readonly description: "How many days before the arrival guests are allowed to book";
                                                readonly type: "integer";
                                            };
                                            readonly closedToArrival: {
                                                readonly description: "If the interval dates are closed for arrival";
                                                readonly type: "integer";
                                            };
                                            readonly closedToDeparture: {
                                                readonly description: "If the interval dates are closed for departure the number of applicable keys varies here based on the occupancy settings for the room type.";
                                                readonly type: "integer";
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly success: {
                    readonly description: "Returns if the request could be completed";
                    readonly type: "boolean";
                };
                readonly data: {
                    readonly description: "Allotment Blocks";
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly propertyID: {
                                readonly description: "Property ID associated to the allotment block";
                                readonly type: "string";
                            };
                            readonly allotmentBlockCode: {
                                readonly description: "Allotment block code";
                                readonly type: "string";
                            };
                            readonly allotmentBlockStatus: {
                                readonly description: "Allotment block status";
                                readonly type: "string";
                            };
                            readonly allotmentBlockName: {
                                readonly description: "Allotment block name";
                                readonly type: "string";
                            };
                            readonly allotmentBlockId: {
                                readonly description: "Allotment block ID";
                                readonly type: "string";
                            };
                            readonly rateType: {
                                readonly description: "Rate type for the allotment block";
                                readonly type: "string";
                            };
                            readonly ratePlanId: {
                                readonly description: "Rate plan ID if applicable";
                                readonly type: "string";
                            };
                            readonly allotmentType: {
                                readonly description: "the type of allotment block";
                                readonly type: "string";
                            };
                            readonly groupId: {
                                readonly description: "Group profile ID associated to the allotment block";
                                readonly type: "string";
                            };
                            readonly groupCode: {
                                readonly description: "Group profile code associated to the allotment block";
                                readonly type: "string";
                            };
                            readonly isAutoRelease: {
                                readonly description: "If the allotment block is configured for auto-release";
                                readonly type: "boolean";
                            };
                            readonly autoRelease: {
                                readonly description: "auto-release data if applicable";
                                readonly type: "object";
                                readonly properties: {
                                    readonly releaseType: {
                                        readonly description: "The type of auto-release\n\n`all_dates` `by_day` `by_interval`";
                                        readonly type: "string";
                                        readonly enum: readonly ["all_dates", "by_day", "by_interval"];
                                    };
                                    readonly days: {
                                        readonly description: "The number of days prior to the end of the allotment block to begin releasing dates from the allotment block";
                                        readonly type: "integer";
                                    };
                                    readonly releaseTime: {
                                        readonly description: "The hour to being the auto-release in HH:00 format, e.g. '00:00', '01:00'...";
                                        readonly type: "string";
                                    };
                                };
                            };
                            readonly allotmentIntervals: {
                                readonly description: "array of interval data by room type";
                                readonly type: "array";
                                readonly items: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly roomTypeId: {
                                            readonly description: "Room type ID";
                                            readonly type: "string";
                                        };
                                        readonly availability: {
                                            readonly description: "Interval availability data by day in interval";
                                            readonly type: "object";
                                            readonly properties: {
                                                readonly date: {
                                                    readonly description: "Day within interval";
                                                    readonly type: "string";
                                                    readonly format: "date";
                                                };
                                                readonly blockRemaining: {
                                                    readonly description: "Number of units remaining for the room type for this day";
                                                    readonly type: "integer";
                                                };
                                                readonly blockAllotted: {
                                                    readonly description: "Total number of units available for the room type for this day";
                                                    readonly type: "integer";
                                                };
                                                readonly blockConfirmed: {
                                                    readonly description: "Number of units booked for the room type for this day";
                                                    readonly type: "integer";
                                                };
                                                readonly rate: {
                                                    readonly description: "the price";
                                                    readonly type: "string";
                                                };
                                                readonly guestPricing: {
                                                    readonly description: "Guest pricing data if applicable. Note: the number of results varies here based on the occupancy settings and custom guest pricing for the room type.";
                                                    readonly type: "object";
                                                    readonly properties: {
                                                        readonly adult1: {
                                                            readonly description: "Price for adult 1";
                                                            readonly type: "string";
                                                        };
                                                        readonly adult2: {
                                                            readonly description: "Price for adult 2";
                                                            readonly type: "string";
                                                        };
                                                        readonly adult3: {
                                                            readonly description: "Price for adult 3";
                                                            readonly type: "string";
                                                        };
                                                        readonly child1: {
                                                            readonly description: "Price for child 1";
                                                            readonly type: "string";
                                                        };
                                                        readonly child2: {
                                                            readonly description: "Price for child 2";
                                                            readonly type: "string";
                                                        };
                                                        readonly child3: {
                                                            readonly description: "Price for child 3";
                                                            readonly type: "string";
                                                        };
                                                    };
                                                };
                                            };
                                        };
                                        readonly restrictions: {
                                            readonly description: "Interval restrictions if applicable";
                                            readonly type: "object";
                                            readonly properties: {
                                                readonly minLos: {
                                                    readonly description: "Minimum length of stay requirement";
                                                    readonly type: "integer";
                                                };
                                                readonly maxLos: {
                                                    readonly description: "Maximum length of stay requirement";
                                                    readonly type: "integer";
                                                };
                                                readonly cutOffDays: {
                                                    readonly description: "How many days before arrival should guests be required to book";
                                                    readonly type: "integer";
                                                };
                                                readonly lastMinuteBookingDays: {
                                                    readonly description: "Hoe many days before the arrival guests are allowed to book";
                                                    readonly type: "integer";
                                                };
                                                readonly closedToArrival: {
                                                    readonly description: "If the interval dates are closed for arrival";
                                                    readonly type: "integer";
                                                };
                                                readonly closedToDeparture: {
                                                    readonly description: "If the interval dates are closed for departure";
                                                    readonly type: "integer";
                                                };
                                            };
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const PostUpdateallotmentblocknotes: {
    readonly formData: {
        readonly type: "object";
        readonly properties: {
            readonly propertyID: {
                readonly description: "Property ID";
                readonly type: "string";
            };
            readonly allotmentBlockCode: {
                readonly description: "Allotment Block Code";
                readonly type: "string";
            };
            readonly noteID: {
                readonly description: "Note's ID";
                readonly type: "string";
            };
            readonly text: {
                readonly description: "Note's text (null for no change)";
                readonly type: "string";
            };
            readonly status: {
                readonly description: "Note status";
                readonly type: "string";
                readonly enum: readonly ["active", "archived"];
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly success: {
                    readonly description: "Returns if the request could be completed";
                    readonly type: "boolean";
                };
                readonly data: {
                    readonly description: "The created note";
                    readonly type: "object";
                    readonly properties: {
                        readonly id: {
                            readonly description: "Note ID";
                            readonly type: "string";
                        };
                        readonly text: {
                            readonly description: "Note contents";
                            readonly type: "string";
                        };
                        readonly createdBy: {
                            readonly description: "User Name";
                            readonly type: "string";
                        };
                        readonly createdAt: {
                            readonly description: "Creation datetime (format: Y-m-d H:i:s)";
                            readonly type: "string";
                            readonly format: "date-time";
                        };
                        readonly updatedAt: {
                            readonly description: "Last modification datetime (format: Y-m-d H:i:s)";
                            readonly type: "string";
                            readonly format: "date-time";
                        };
                        readonly archivedAt: {
                            readonly description: "Archival datetime (format: Y-m-d H:i:s)";
                            readonly type: "string";
                            readonly format: "date-time";
                        };
                        readonly status: {
                            readonly description: "Note status";
                            readonly type: "boolean";
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const Postadjustment: {
    readonly formData: {
        readonly type: "object";
        readonly properties: {
            readonly propertyID: {
                readonly description: "Property ID";
                readonly type: "string";
            };
            readonly reservationID: {
                readonly description: "Reservation identifier";
                readonly type: "string";
            };
            readonly type: {
                readonly description: "Apply Adjustment to";
                readonly type: "string";
                readonly enum: readonly ["rate", "product", "fee", "tax"];
            };
            readonly amount: {
                readonly description: "Adjustment amount";
                readonly type: "number";
            };
            readonly notes: {
                readonly description: "Adjustment notes";
                readonly type: "string";
            };
            readonly itemID: {
                readonly description: "Apply Adjustment to. Identifier for: product, tax, fee. Not for rate";
                readonly type: "string";
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly success: {
                    readonly description: "Returns if the request could be completed";
                    readonly type: "boolean";
                };
                readonly data: {
                    readonly description: "post Adjustment details";
                    readonly type: "object";
                    readonly properties: {
                        readonly adjustmentID: {
                            readonly description: "Adjustment transaction identifier";
                            readonly type: "string";
                        };
                    };
                };
                readonly message: {
                    readonly description: "To be used in case any error occurs (if success = false). If success = true, it does not exist.";
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const Postapperror: {
    readonly formData: {
        readonly type: "object";
        readonly properties: {
            readonly propertyID: {
                readonly description: "Property identifier to be queried";
                readonly type: "string";
            };
            readonly timestamp: {
                readonly description: "Date/time that the error was received by the middleware";
                readonly type: "string";
                readonly format: "date-time";
            };
            readonly eventType: {
                readonly description: "Description for the type of event that caused the error";
                readonly type: "string";
                readonly enum: readonly ["create", "delete", "update", "sync"];
            };
            readonly statusCode: {
                readonly description: "HTTP error status code or other error code ID";
                readonly type: "string";
            };
            readonly description: {
                readonly description: "Description of the error";
                readonly type: "string";
            };
            readonly errorMessage: {
                readonly description: "Detailed message for error";
                readonly type: "string";
            };
            readonly entityType: {
                readonly description: "Type of the entity related to the error";
                readonly type: "string";
                readonly enum: readonly ["invoice", "transaction", "reservation"];
            };
            readonly entityID: {
                readonly description: "Unique ID for the entity related to the error";
                readonly type: "string";
            };
            readonly userID: {
                readonly description: "User ID for the user that triggered event that caused the error";
                readonly type: "string";
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly success: {
                    readonly description: "Returns if the request could be completed";
                    readonly type: "boolean";
                };
                readonly data: {
                    readonly description: "Integration state details";
                    readonly type: "object";
                    readonly properties: {
                        readonly errorID: {
                            readonly description: "Unique ID of error recorded in Cloudbeds";
                            readonly type: "string";
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const Postapppropertysettings: {
    readonly formData: {
        readonly type: "object";
        readonly properties: {
            readonly propertyID: {
                readonly description: "Property ID";
                readonly type: "string";
            };
            readonly appClientID: {
                readonly description: "Application Client ID";
                readonly type: "string";
            };
            readonly key: {
                readonly description: "Key";
                readonly type: "string";
            };
            readonly value: {
                readonly description: "Value";
                readonly type: "string";
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly success: {
                    readonly description: "Success";
                    readonly type: "boolean";
                };
                readonly data: {
                    readonly description: "Data";
                    readonly type: "object";
                    readonly properties: {
                        readonly id: {
                            readonly description: "ID";
                            readonly type: "string";
                        };
                        readonly key: {
                            readonly description: "Key";
                            readonly type: "string";
                        };
                        readonly value: {
                            readonly description: "Value";
                            readonly type: "string";
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const Postappstate: {
    readonly formData: {
        readonly type: "object";
        readonly properties: {
            readonly propertyID: {
                readonly description: "Property identifier to be updated";
                readonly type: "string";
            };
            readonly app_state: {
                readonly description: "Current integration state between third-party and property.";
                readonly type: "string";
                readonly enum: readonly ["enabled", "disabled", "installing", "pending"];
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly success: {
                    readonly description: "Returns if the request could be completed";
                    readonly type: "boolean";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const Postcharge: {
    readonly formData: {
        readonly type: "object";
        readonly properties: {
            readonly propertyID: {
                readonly description: "";
                readonly type: "string";
            };
            readonly reservationID: {
                readonly description: "Reservation ID";
                readonly type: "string";
            };
            readonly houseAccountID: {
                readonly description: "House Account ID";
                readonly type: "string";
            };
            readonly groupID: {
                readonly description: "Group ID";
                readonly type: "string";
            };
            readonly accountsReceivableLedgerID: {
                readonly description: "Accounts Receivable Ledger ID";
                readonly type: "string";
            };
            readonly amount: {
                readonly description: "Amount to charge";
                readonly type: "string";
            };
            readonly currency: {
                readonly description: "Currency to charge";
                readonly type: "string";
            };
            readonly description: {
                readonly description: "Description of the payment to display on folio";
                readonly type: "string";
            };
            readonly paymentMethodId: {
                readonly description: "Payment method UUID";
                readonly type: "string";
            };
            readonly isDeposit: {
                readonly description: "determine if this payment is a deposit (default: false)";
                readonly type: "boolean";
            };
            readonly redirectUrl: {
                readonly description: "client will be redirected to this page after he completed 3ds challenge. User will be redirected with HTTP get redirect and parameter **result** will be added to query string with possible values: - **failed** if 3ds challenge is not passed - **successful** if 3ds challenge is passed If not provided for card with 3ds the request will be rejected";
                readonly type: "string";
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly success: {
                    readonly description: "Returns if the request was completed";
                    readonly type: "boolean";
                };
                readonly data: {
                    readonly description: "Payment details";
                    readonly type: "object";
                    readonly properties: {
                        readonly paymentID: {
                            readonly description: "Payment ID";
                            readonly type: "string";
                        };
                        readonly transactionID: {
                            readonly description: "Transaction ID";
                            readonly type: "string";
                        };
                        readonly paymentStatus: {
                            readonly description: "the status of the payment, could be 'pending' if the payment requires a next action";
                            readonly type: "string";
                        };
                        readonly paymentType: {
                            readonly description: "detected payment type. Ex: 'cards', 'oxxo'";
                            readonly type: "string";
                        };
                        readonly nextAction: {
                            readonly description: "not set if no next action is required";
                            readonly type: "object";
                            readonly properties: {
                                readonly type: {
                                    readonly description: "The type of next action required. Ex: 'redirect'";
                                    readonly type: "string";
                                };
                                readonly details: {
                                    readonly description: "The details of the next action";
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly url: {
                                            readonly description: "The URL to redirect the user to";
                                            readonly type: "string";
                                        };
                                        readonly method: {
                                            readonly description: "The HTTP method to use when redirecting the user";
                                            readonly type: "string";
                                        };
                                    };
                                };
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const Postcreditcard: {
    readonly formData: {
        readonly type: "object";
        readonly properties: {
            readonly propertyID: {
                readonly description: "";
                readonly type: "string";
            };
            readonly reservationID: {
                readonly description: "";
                readonly type: "string";
            };
            readonly cardToken: {
                readonly description: "cardToken provided by Stripe JS, not recommended, not required if paymentMethodId is provided";
                readonly type: "string";
            };
            readonly paymentMethodId: {
                readonly description: "Payment Method ID provided by the payments SDK";
                readonly type: "string";
            };
            readonly returnUrl: {
                readonly description: "client will be redirected to this page after he completed 3ds challenge. User will be redirected with HTTP get redirect and parameter **result** will be added to query string with possible values: - **failed** if 3ds challenge is not passed - **successful** if 3ds challenge is passed If not provided for card with 3ds the request will be rejected";
                readonly type: "string";
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly success: {
                    readonly description: "Returns if the request could be completed";
                    readonly type: "boolean";
                };
                readonly data: {
                    readonly description: "Rates details";
                    readonly type: "object";
                    readonly properties: {
                        readonly cardID: {
                            readonly description: "Card ID";
                            readonly type: "string";
                        };
                        readonly cardNumber: {
                            readonly description: "Ending digits of the credit card";
                            readonly type: "string";
                        };
                        readonly cardType: {
                            readonly description: "Abbreviated name of credit card type\n\n`visa` `master` `amex` `aura` `diners` `hiper` `elo` `Discover` `jcb` `maestro` `dan` `PostCard` `Eurocard` `сunion`";
                            readonly type: "string";
                            readonly enum: readonly ["visa", "master", "amex", "aura", "diners", "hiper", "elo", "Discover", "jcb", "maestro", "dan", "PostCard", "Eurocard", "сunion"];
                        };
                        readonly redirectUrl: {
                            readonly description: "null if no 3ds required";
                            readonly type: "string";
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const Postcustomfield: {
    readonly formData: {
        readonly type: "object";
        readonly properties: {
            readonly propertyID: {
                readonly description: "Property ID";
                readonly type: "string";
            };
            readonly name: {
                readonly description: "Field name";
                readonly type: "string";
            };
            readonly shortcode: {
                readonly description: "Internal reference and is used for integration purposes such as custom links and the API";
                readonly type: "string";
            };
            readonly applyTo: {
                readonly description: "Where put this field in reservation or guest section of the booking. reservation - applies the custom field to reservations in myfrontdesk guest - applies the custom field to guest interface in myfrontdesk";
                readonly type: "string";
                readonly enum: readonly ["reservation", "guest"];
                readonly default: "reservation";
            };
            readonly required: {
                readonly description: "Specify whether this field is required to be filled out.";
                readonly type: "boolean";
                readonly default: false;
            };
            readonly maxCharacters: {
                readonly description: "Maximum number of characters allowed to be entered in this field.";
                readonly type: "integer";
                readonly default: 40;
            };
            readonly type: {
                readonly description: "The field's input type.";
                readonly type: "string";
                readonly enum: readonly ["input", "text"];
                readonly default: "input";
            };
            readonly displayed: {
                readonly description: "¹ Specify where this custom field to show up. reservation - applies the custom field to reservation interface in myfrontdesk booking - applies the custom field to the booking engine card - applies the custom field to Registration cards";
                readonly type: "array";
                readonly items: {
                    readonly type: "string";
                    readonly enum: readonly ["reservation", "booking", "card"];
                };
            };
            readonly isPersonal: {
                readonly description: "Specifies if the contents of this field may contain personal information. User's personal information may be removed upon request according to GDPR rules.";
                readonly type: "boolean";
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly success: {
                    readonly description: "Returns if the request could be completed";
                    readonly type: "boolean";
                };
                readonly data: {
                    readonly description: "Field details";
                    readonly type: "object";
                    readonly properties: {
                        readonly fieldID: {
                            readonly description: "Field name";
                            readonly type: "string";
                        };
                        readonly name: {
                            readonly description: "Field name";
                            readonly type: "string";
                        };
                        readonly shortcode: {
                            readonly description: "Internal reference and is used for integration purposes such as custom links and the API";
                            readonly type: "string";
                        };
                    };
                };
                readonly message: {
                    readonly description: "To be used in case any error occurs (if success = false). If success = true, it does not exist.";
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const Postcustomitem: {
    readonly formData: {
        readonly type: "object";
        readonly properties: {
            readonly propertyID: {
                readonly description: "Property ID";
                readonly type: "string";
            };
            readonly reservationID: {
                readonly description: "Reservation identifier. Required if no houseAccountID or groupCode is provided.";
                readonly type: "string";
            };
            readonly houseAccountID: {
                readonly description: "House account identifier. Required if no reservationID or groupCode is provided.";
                readonly type: "string";
            };
            readonly groupCode: {
                readonly description: "Group identifier. Required if no reservationID or houseAccountID is provided.";
                readonly type: "string";
            };
            readonly referenceID: {
                readonly description: "partner's transaction reference. If exist then Cloudbeds will prevent adding of duplicates";
                readonly type: "string";
            };
            readonly subReservationID: {
                readonly description: "Sub Reservation identifier";
                readonly type: "string";
            };
            readonly roomID: {
                readonly description: "Room identifier (Ignored if subReservationID exist)";
                readonly type: "string";
            };
            readonly items: {
                readonly description: "list of items will be posted";
                readonly type: "array";
                readonly items: {
                    readonly type: "object";
                    readonly properties: {
                        readonly appItemID: {
                            readonly description: "Identifier of item. Future calls using the same ID will use previously sent item name and description. Item name/description sent in new request will be ignored.";
                            readonly type: "string";
                        };
                        readonly itemSKU: {
                            readonly description: "Item SKU identifier";
                            readonly type: "string";
                        };
                        readonly itemQuantity: {
                            readonly description: "Items quantity";
                            readonly type: "integer";
                        };
                        readonly itemPrice: {
                            readonly description: "Item price";
                            readonly type: "number";
                        };
                        readonly itemName: {
                            readonly description: "Item name";
                            readonly type: "string";
                        };
                        readonly itemCategoryName: {
                            readonly description: "Item category name";
                            readonly type: "string";
                        };
                        readonly itemNote: {
                            readonly description: "Item note";
                            readonly type: "string";
                        };
                        readonly itemTaxes: {
                            readonly description: "list of taxes applied to item";
                            readonly type: "array";
                            readonly items: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly taxName: {
                                        readonly description: "tax name";
                                        readonly type: "string";
                                    };
                                    readonly taxValue: {
                                        readonly description: "tax value";
                                        readonly type: "number";
                                    };
                                };
                            };
                        };
                        readonly itemFees: {
                            readonly description: "list of fees applied to item";
                            readonly type: "array";
                            readonly items: {
                                readonly type: "object";
                                readonly properties: {
                                    readonly feeName: {
                                        readonly description: "fee name";
                                        readonly type: "string";
                                    };
                                    readonly feeValue: {
                                        readonly description: "fee value";
                                        readonly type: "number";
                                    };
                                };
                            };
                        };
                    };
                };
            };
            readonly saleDate: {
                readonly description: "posting date";
                readonly type: "string";
                readonly format: "date-time";
                readonly default: "current_timestamp";
            };
            readonly guestID: {
                readonly description: "Guest identifier";
                readonly type: "string";
            };
            readonly guestName: {
                readonly description: "(Ignored if guestID exist)";
                readonly type: "string";
            };
            readonly payments: {
                readonly description: "list of payments If the item is already paid";
                readonly type: "array";
                readonly items: {
                    readonly type: "object";
                    readonly properties: {
                        readonly paymentType: {
                            readonly description: "Payment method. Use the call [getPaymentMethods](#api-Payment-getPaymentMethods) to get the properties enabled payment methods.";
                            readonly type: "string";
                        };
                        readonly cardType: {
                            readonly description: "When paymentType is cards or credit, the cardType could be specified (visa, master etc.). The list of types can be found with [getPaymentMethods](#api-Payment-getPaymentMethods) (cardCode inside cardTypes). If omitted, payment is treated as Credit Card Without Details.";
                            readonly type: "string";
                        };
                        readonly amount: {
                            readonly description: "payment amount";
                            readonly type: "number";
                        };
                        readonly notes: {
                            readonly description: "payment note";
                            readonly type: "string";
                        };
                    };
                };
            };
            readonly itemPaid: {
                readonly description: "If the item is already paid. Note: If set to true, a payment in cash will be registered for the total value of the item, taxes and fees. If this is not the expected behavior, set to false, and register the operation manually. (Ignored if payments array exist)";
                readonly type: "boolean";
                readonly default: false;
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly success: {
                    readonly description: "Returns if the request could be completed";
                    readonly type: "boolean";
                };
                readonly data: {
                    readonly description: "Sold product details";
                    readonly type: "object";
                    readonly properties: {
                        readonly soldProductID: {
                            readonly description: "Sold product identifier (Usable to void this product in future).";
                            readonly type: "string";
                        };
                        readonly transactionID: {
                            readonly description: "Transaction identifier";
                            readonly type: "string";
                        };
                        readonly notice: {
                            readonly description: "In case that a referenceID was sent, for second time, this field will alert that nothing was created or updated.";
                            readonly type: "string";
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const Postcustompaymentmethod: {
    readonly formData: {
        readonly type: "object";
        readonly properties: {
            readonly propertyID: {
                readonly description: "Property ID, if not sent will retrieve property ID from credentials, only one property ID call.";
                readonly type: "string";
            };
            readonly method: {
                readonly description: "Payment Method, value used in future calls. Must be unique for each property and no whitespaces are allowed (use camel case or underline instead). Will be verified against existing Payment Methods, if it exists, will try to enable it.";
                readonly type: "string";
            };
            readonly methodName: {
                readonly description: "Payment Method Name, value used to represent the Payment Method. Can use spaces. If nothing is sent, will use value for method.";
                readonly type: "string";
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly success: {
                    readonly description: "Returns if the request could be completed";
                    readonly type: "boolean";
                };
                readonly message: {
                    readonly description: "To be used in case any error occurs (if success = false). If success = true, it does not exist.";
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const Postemailschedule: {
    readonly formData: {
        readonly type: "object";
        readonly properties: {
            readonly propertyID: {
                readonly description: "Property ID";
                readonly type: "string";
            };
            readonly emailTemplateID: {
                readonly description: "ID of the email template that will be used when sending an email.";
                readonly type: "string";
            };
            readonly scheduleName: {
                readonly description: "User friendly schedule name that appears in the list. Should contain app name.";
                readonly type: "string";
            };
            readonly schedule: {
                readonly description: "";
                readonly type: "object";
                readonly properties: {
                    readonly reservationStatusChange: {
                        readonly description: "";
                        readonly type: "object";
                        readonly properties: {
                            readonly status: {
                                readonly description: "Specify which reservation status change triggers sending the email";
                                readonly type: "string";
                                readonly enum: readonly ["confirmed", "not_confirmed", "canceled", "checked_in", "checked_out", "no_show"];
                            };
                        };
                    };
                    readonly reservationEvent: {
                        readonly description: "";
                        readonly type: "object";
                        readonly properties: {
                            readonly event: {
                                readonly description: "Specify event that triggers email sending";
                                readonly type: "string";
                                readonly enum: readonly ["after_booking", "after_check_out", "after_check_in", "before_check_out", "before_check_in"];
                            };
                            readonly days: {
                                readonly description: "Number of days prior to or after the event";
                                readonly type: "integer";
                            };
                            readonly time: {
                                readonly description: "Time of the day";
                                readonly type: "string";
                                readonly format: "time";
                            };
                        };
                    };
                };
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly success: {
                    readonly description: "Returns if the request could be completed";
                    readonly type: "boolean";
                };
                readonly emailScheduleID: {
                    readonly description: "The ID of the created email schedule. Only present if success = true";
                    readonly type: "string";
                };
                readonly message: {
                    readonly description: "To be used in case any error occurs (if success = false). If success = true, it does not exist.";
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const Postemailtemplate: {
    readonly formData: {
        readonly type: "object";
        readonly properties: {
            readonly propertyID: {
                readonly description: "Property ID";
                readonly type: "string";
            };
            readonly emailType: {
                readonly description: "Type of the email template: Marketing or Non-Marketing. Only applicable to GDPR-compliant properties.";
                readonly type: "string";
                readonly enum: readonly ["nonMarketing", "marketing"];
                readonly default: "nonMarketing";
            };
            readonly name: {
                readonly description: "Template name";
                readonly type: "string";
            };
            readonly from: {
                readonly description: "Email address from which the email message may be sent";
                readonly type: "string";
            };
            readonly fromName: {
                readonly description: "from which the email message may be sent. If empty email will be used";
                readonly type: "string";
            };
            readonly subject: {
                readonly description: "Email message subject. The subject key should be a language code (IETF). A few examples are listed below.";
                readonly type: "object";
                readonly properties: {
                    readonly en: {
                        readonly description: "Email message subject in English";
                        readonly type: "string";
                    };
                    readonly es: {
                        readonly description: "Email message subject in Spanish";
                        readonly type: "string";
                    };
                    readonly ru: {
                        readonly description: "Email message subject in Russian";
                        readonly type: "string";
                    };
                    readonly "pt-br": {
                        readonly description: "Email message subject in Portuguese";
                        readonly type: "string";
                    };
                };
            };
            readonly body: {
                readonly description: "Email message body. The body key should be a language code (IETF). A few examples are listed below.";
                readonly type: "object";
                readonly properties: {
                    readonly en: {
                        readonly description: "Email message body in English";
                        readonly type: "string";
                    };
                    readonly es: {
                        readonly description: "Email message body in Spanish";
                        readonly type: "string";
                    };
                    readonly ru: {
                        readonly description: "Email message body in Russian";
                        readonly type: "string";
                    };
                    readonly "pt-br": {
                        readonly description: "Email message body in Portuguese";
                        readonly type: "string";
                    };
                };
            };
            readonly replyTo: {
                readonly description: "Email address to which the email message may be replied. If empty, the value on from parameter will be used.";
                readonly type: "string";
            };
            readonly replyToName: {
                readonly description: "Name to which the email message may be replied. If empty, email will be used.";
                readonly type: "string";
            };
            readonly autofillAllLanguages: {
                readonly description: "If set, all languages will be set with the value for the property language. If not informed and only one language is sent, it's considered true, if more than one language is sent, it'll be considered false.";
                readonly type: "boolean";
            };
            readonly cc: {
                readonly description: "Email address to which the email message may be sent as a Carbon Copy";
                readonly type: "string";
            };
            readonly bcc: {
                readonly description: "Email address to which the email message may be sent as a Blind Carbon Copy";
                readonly type: "string";
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly success: {
                    readonly description: "Returns if the request could be completed";
                    readonly type: "boolean";
                };
                readonly emailTemplateID: {
                    readonly description: "The ID of the created email template. Only present if success = true";
                    readonly type: "string";
                };
                readonly message: {
                    readonly description: "To be used in case any error occurs (if success = false). If success = true, it does not exist.";
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const Postfile: {
    readonly formData: {
        readonly type: "object";
        readonly properties: {
            readonly propertyID: {
                readonly description: "Property ID";
                readonly type: "string";
            };
            readonly file: {
                readonly description: "Form-based File Upload<br/> Allowed file types: <code>*.pdf, *.rtf, *.doc, *.docx, *.txt, *.jpg, *.jpeg, *.png, *.gif, *.csv, *.xls, *.xlsx, *.xml</code><br/> Allowed max file size: 100MB";
                readonly type: "string";
                readonly format: "binary";
            };
            readonly groupCode: {
                readonly description: "optional - the group code if the file is to be attached to a group profile";
                readonly type: "string";
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly success: {
                    readonly description: "Returns if the request could be completed";
                    readonly type: "boolean";
                };
                readonly message: {
                    readonly description: "To be used in case any error occurs (if success = false). If success = true, it does not exist.";
                    readonly type: "string";
                };
                readonly data: {
                    readonly description: "Details for the uploaded file";
                    readonly type: "object";
                    readonly properties: {
                        readonly fileID: {
                            readonly description: "uploaded file identifier";
                            readonly type: "string";
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const Postgovernmentreceipt: {
    readonly formData: {
        readonly type: "object";
        readonly properties: {
            readonly propertyID: {
                readonly description: "Property identifier to be updated";
                readonly type: "string";
            };
            readonly reservationID: {
                readonly description: "Reservation identifier. It, or houseAccountID, is necessary.";
                readonly type: "string";
            };
            readonly houseAccountID: {
                readonly description: "House Account identifier. It, or reservationID, is necessary.";
                readonly type: "string";
            };
            readonly name: {
                readonly description: "Name of the document. Will be used to describe document in MFD.";
                readonly type: "string";
            };
            readonly url: {
                readonly description: "URL for user to download document.";
                readonly type: "string";
            };
            readonly amount: {
                readonly description: "Value of posted document";
                readonly type: "number";
            };
            readonly identifier: {
                readonly description: "Receipt Identifier of document. If not sent, a random identifier will be generated.";
                readonly type: "string";
            };
            readonly issueDate: {
                readonly description: "Datetime of document emission, if not sent, current datetime will be assumed.";
                readonly type: "string";
                readonly format: "date-time";
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly success: {
                    readonly description: "Returns if the request could be completed";
                    readonly type: "boolean";
                };
                readonly message: {
                    readonly description: "To be used in case any error occurs (if success = false). If success = true, it does not exist.";
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const Postgroupnote: {
    readonly formData: {
        readonly type: "object";
        readonly properties: {
            readonly propertyID: {
                readonly description: "Property ID";
                readonly type: "string";
            };
            readonly groupCode: {
                readonly description: "Group code";
                readonly type: "string";
            };
            readonly groupNote: {
                readonly description: "Group note";
                readonly type: "string";
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly success: {
                    readonly description: "Success";
                    readonly type: "boolean";
                };
                readonly code: {
                    readonly description: "code HTTP status code";
                    readonly type: "integer";
                };
                readonly data: {
                    readonly description: "Data";
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly id: {
                                readonly description: "ID for the note";
                                readonly type: "string";
                            };
                            readonly group_profile_id: {
                                readonly description: "Group profile ID";
                                readonly type: "string";
                            };
                            readonly text: {
                                readonly description: "Note text";
                                readonly type: "string";
                            };
                            readonly created_by: {
                                readonly description: "Created by";
                                readonly type: "string";
                            };
                            readonly created_at: {
                                readonly description: "Created at";
                                readonly type: "string";
                            };
                            readonly updated_at: {
                                readonly description: "Updated at";
                                readonly type: "string";
                            };
                            readonly archived: {
                                readonly description: "Note archived";
                                readonly type: "string";
                            };
                            readonly archived_at: {
                                readonly description: "Note archived at";
                                readonly type: "string";
                            };
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const Postguest: {
    readonly formData: {
        readonly type: "object";
        readonly properties: {
            readonly propertyID: {
                readonly description: "Property ID";
                readonly type: "string";
            };
            readonly reservationID: {
                readonly description: "Reservation ID";
                readonly type: "string";
            };
            readonly guestFirstName: {
                readonly description: "";
                readonly type: "string";
            };
            readonly guestLastName: {
                readonly description: "";
                readonly type: "string";
            };
            readonly guestGender: {
                readonly description: "";
                readonly type: "string";
                readonly enum: readonly ["M", "F", "N/A"];
            };
            readonly guestEmail: {
                readonly description: "";
                readonly type: "string";
            };
            readonly guestPhone: {
                readonly description: "";
                readonly type: "string";
            };
            readonly guestCellPhone: {
                readonly description: "";
                readonly type: "string";
            };
            readonly guestAddress1: {
                readonly description: "";
                readonly type: "string";
            };
            readonly guestAddress2: {
                readonly description: "";
                readonly type: "string";
            };
            readonly guestCity: {
                readonly description: "";
                readonly type: "string";
            };
            readonly guestCountry: {
                readonly description: "ISO-Code for Country (2 characters)";
                readonly type: "string";
            };
            readonly guestState: {
                readonly description: "";
                readonly type: "string";
            };
            readonly guestZip: {
                readonly description: "";
                readonly type: "string";
            };
            readonly guestBirthDate: {
                readonly description: "";
                readonly type: "string";
                readonly format: "date";
            };
            readonly guestDocumentType: {
                readonly description: "Document Type<br /> dni - Identity card<br /> nie - Residence permit<br /> na - non selection<br />";
                readonly type: "string";
                readonly enum: readonly ["dni", "driver_license", "na", "nie", "passport", "social_security_card", "student_id"];
            };
            readonly guestDocumentNumber: {
                readonly description: "(mandatory when guestDocumentType is sent)";
                readonly type: "string";
            };
            readonly guestDocumentIssueDate: {
                readonly description: "(mandatory when guestDocumentType is sent and is not DNI)";
                readonly type: "string";
                readonly format: "date";
            };
            readonly guestDocumentIssuingCountry: {
                readonly description: "Valid ISO-Code for Country (2 characters) (mandatory when guestDocumentType is sent)";
                readonly type: "string";
            };
            readonly guestDocumentExpirationDate: {
                readonly description: "(mandatory when guestDocumentType is sent and is not DNI or NIE)";
                readonly type: "string";
                readonly format: "date";
            };
            readonly guestRequirements: {
                readonly description: "Object with guest requirements information.";
                readonly type: "array";
                readonly items: {
                    readonly type: "object";
                    readonly additionalProperties: true;
                };
            };
            readonly customFields: {
                readonly description: "Only guest custom fields are allowed.";
                readonly type: "array";
                readonly items: {
                    readonly type: "object";
                    readonly properties: {
                        readonly customFieldName: {
                            readonly description: "Custom Field shortcode.";
                            readonly type: "string";
                        };
                        readonly customFieldValue: {
                            readonly description: "Custom field value. It's strictly forbidden to send unencrypted payment data through the API. Numeric values longer than 12 characters and considered valid by Luhn's algorithm will be rejected.";
                            readonly type: "string";
                        };
                    };
                };
            };
            readonly guestNote: {
                readonly description: "Note to be added to the Guest";
                readonly type: "string";
            };
            readonly reservationNote: {
                readonly description: "Note to be added only to the Reservation.";
                readonly type: "string";
            };
            readonly guestCompanyName: {
                readonly description: "Guest company name";
                readonly type: "string";
            };
            readonly guestCompanyTaxId: {
                readonly description: "Guest company tax ID";
                readonly type: "string";
            };
            readonly guestTaxId: {
                readonly description: "Guest tax ID";
                readonly type: "string";
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly success: {
                    readonly description: "Returns if the request could be completed";
                    readonly type: "boolean";
                };
                readonly guestID: {
                    readonly description: "Returns the Guest ID if the request could be completed successfully";
                    readonly type: "string";
                };
                readonly message: {
                    readonly description: "To be used in case any error occurs (if success = false). If success = true, it does not exist.";
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const Postguestdocument: {
    readonly formData: {
        readonly type: "object";
        readonly properties: {
            readonly propertyID: {
                readonly description: "Property ID";
                readonly type: "string";
            };
            readonly guestID: {
                readonly description: "Guest Unique Identifier";
                readonly type: "string";
            };
            readonly file: {
                readonly description: "Form-based File Upload<br/> Allowed file types: <code>*.pdf, *.rtf, *.doc, *.docx, *.txt, *.jpg, *.jpeg, *.png, *.gif, *.csv, *.xls, *.xlsx, *.xml</code><br/> Allowed max file size: 100MB";
                readonly type: "string";
                readonly format: "binary";
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly success: {
                    readonly description: "Returns if the request could be completed";
                    readonly type: "boolean";
                };
                readonly message: {
                    readonly description: "To be used in case any error occurs (if success = false). If success = true, it does not exist.";
                    readonly type: "string";
                };
                readonly data: {
                    readonly description: "Details for the uploaded file";
                    readonly type: "object";
                    readonly properties: {
                        readonly fileID: {
                            readonly description: "uploaded file identifier";
                            readonly type: "string";
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const Postguestnote: {
    readonly formData: {
        readonly type: "object";
        readonly properties: {
            readonly propertyID: {
                readonly description: "Property ID";
                readonly type: "string";
            };
            readonly guestID: {
                readonly description: "Guest ID";
                readonly type: "string";
            };
            readonly guestNote: {
                readonly description: "Note to be added to guest profile. It's strictly forbidden to send unencrypted payment data through the API. Numeric values longer than 12 characters and considered valid by Luhn's algorithm will be rejected.";
                readonly type: "string";
            };
            readonly userID: {
                readonly description: "User ID Identify the actual user that is posting the note";
                readonly type: "string";
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly success: {
                    readonly description: "Returns if the request could be completed";
                    readonly type: "boolean";
                };
                readonly guestNoteID: {
                    readonly description: "Guest note ID";
                    readonly type: "string";
                };
                readonly message: {
                    readonly description: "To be used in case any error occurs (if success = false). If success = true, it does not exist.";
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const Postguestphoto: {
    readonly formData: {
        readonly type: "object";
        readonly properties: {
            readonly guestID: {
                readonly description: "Guest Unique Identifier";
                readonly type: "string";
            };
            readonly file: {
                readonly description: "Form-based File Upload<br/> Allowed file types: <code>*.jpg, *.jpeg, *.png, *.gif</code><br/> Allowed max file size: 15MB";
                readonly type: "string";
                readonly format: "binary";
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly success: {
                    readonly description: "Returns if the request could be completed";
                    readonly type: "boolean";
                };
                readonly message: {
                    readonly description: "To be used in case any error occurs (if success = false). If success = true, it does not exist.";
                    readonly type: "string";
                };
                readonly data: {
                    readonly description: "Details for the uploaded file";
                    readonly type: "object";
                    readonly properties: {
                        readonly fileID: {
                            readonly description: "uploaded file identifier";
                            readonly type: "string";
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const Postgueststoroom: {
    readonly formData: {
        readonly type: "object";
        readonly properties: {
            readonly propertyID: {
                readonly description: "Property ID";
                readonly type: "string";
            };
            readonly reservationID: {
                readonly description: "Reservation ID";
                readonly type: "string";
            };
            readonly roomID: {
                readonly description: "Room ID already assigned to Reservation";
                readonly type: "integer";
            };
            readonly guestIDs: {
                readonly description: "Guest ID(s) to be assigned to room. If more than one, send as comma-separated, i.e. 37,345,89";
                readonly type: "string";
            };
            readonly removeGuestIDs: {
                readonly description: "If sent, will remove guest ID(s) before adding guests sent in guestIDs parameter. If more than one, send as comma-separated, i.e. 37,345,89. Main Guest is never removed.";
                readonly type: "string";
            };
            readonly removeGuestIDsFromRoom: {
                readonly description: "If sent, will remove guest ID(s) only from the specified Room ID(s). If more than one, send as comma-separated, i.e. 37,345,89. Incompatible with removeAll parameter.";
                readonly type: "string";
            };
            readonly removeAll: {
                readonly description: "If set true, will remove all guests assigned to roomID before assigning guests sent in guestIDs parameter. Main Guest is never removed.";
                readonly type: "boolean";
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly success: {
                    readonly description: "Returns if the request could be completed";
                    readonly type: "boolean";
                };
                readonly message: {
                    readonly description: "To be used in case any error occurs (if success = false). If success = true, it does not exist.";
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const Posthousekeeper: {
    readonly formData: {
        readonly type: "object";
        readonly properties: {
            readonly propertyID: {
                readonly description: "Property ID";
                readonly type: "string";
            };
            readonly name: {
                readonly description: "Housekeeper name";
                readonly type: "string";
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly success: {
                    readonly description: "Returns if the request could be completed";
                    readonly type: "boolean";
                };
                readonly housekeeperID: {
                    readonly description: "Housekeeper ID. Returned if success = true.";
                    readonly type: "string";
                };
                readonly message: {
                    readonly description: "To be used in case any error occurs (if success = false). If success = true, it does not exist.";
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const Posthousekeepingassignment: {
    readonly formData: {
        readonly type: "object";
        readonly properties: {
            readonly propertyID: {
                readonly description: "Property ID";
                readonly type: "string";
            };
            readonly roomIDs: {
                readonly description: "List of room IDs comma-separated, i.e. 37,345,89";
                readonly type: "string";
            };
            readonly housekeeperID: {
                readonly description: "Housekeeper ID. To designate a room as unassigned, simply set the value to 0.";
                readonly type: "string";
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly success: {
                    readonly description: "Returns if the request could be completed";
                    readonly type: "boolean";
                };
                readonly message: {
                    readonly description: "To be used in case any error occurs (if success = false). If success = true, it does not exist.";
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const Posthousekeepingstatus: {
    readonly formData: {
        readonly type: "object";
        readonly properties: {
            readonly propertyID: {
                readonly description: "Property ID";
                readonly type: "string";
            };
            readonly roomID: {
                readonly description: "Room ID";
                readonly type: "string";
            };
            readonly roomCondition: {
                readonly description: "New room condition. If no optional parameters are sent, will switch from current room condition. \"inspected\" status is available only if the property has the feature enabled.";
                readonly type: "string";
                readonly enum: readonly ["dirty", "clean", "inspected"];
            };
            readonly doNotDisturb: {
                readonly description: "New \"do not disturb\" status";
                readonly type: "boolean";
            };
            readonly roomComments: {
                readonly description: "New room comments.";
                readonly type: "string";
            };
            readonly refusedService: {
                readonly description: "New \"refused service\" status";
                readonly type: "boolean";
            };
            readonly vacantPickup: {
                readonly description: "New \"vacant_pickup\" status";
                readonly type: "boolean";
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly success: {
                    readonly description: "Returns if the request could be completed";
                    readonly type: "boolean";
                };
                readonly data: {
                    readonly description: "";
                    readonly type: "object";
                    readonly properties: {
                        readonly date: {
                            readonly description: "Date for last date/time that the room condition changed";
                            readonly type: "string";
                            readonly format: "date";
                        };
                        readonly roomID: {
                            readonly description: "ID of room";
                            readonly type: "string";
                        };
                        readonly roomCondition: {
                            readonly description: "New room condition. \"inspected\" status is available only if the property has the feature enabled.\n\n`dirty` `clean` `inspected`";
                            readonly type: "string";
                            readonly enum: readonly ["dirty", "clean", "inspected"];
                        };
                        readonly roomComments: {
                            readonly description: "New room comments.";
                            readonly type: "string";
                        };
                        readonly doNotDisturb: {
                            readonly description: "New \"do not disturb\" status";
                            readonly type: "boolean";
                        };
                        readonly refusedService: {
                            readonly description: "New \"refused service\" status";
                            readonly type: "boolean";
                        };
                        readonly vacantPickup: {
                            readonly description: "New \"vacant_pickup\" status";
                            readonly type: "boolean";
                        };
                    };
                };
                readonly message: {
                    readonly description: "To be used in case any error occurs (if success = false). If success = true, it does not exist.";
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const Postitem: {
    readonly formData: {
        readonly type: "object";
        readonly properties: {
            readonly propertyID: {
                readonly description: "Property ID";
                readonly type: "string";
            };
            readonly reservationID: {
                readonly description: "Reservation identifier. Required if no houseAccountID or groupCode is provided.";
                readonly type: "string";
            };
            readonly houseAccountID: {
                readonly description: "House account identifier. Required if no reservationID or groupCode is provided.";
                readonly type: "string";
            };
            readonly groupCode: {
                readonly description: "Group identifier. Required if no reservationID or houseAccountID is provided.";
                readonly type: "string";
            };
            readonly subReservationID: {
                readonly description: "Sub Reservation identifier.";
                readonly type: "string";
            };
            readonly itemID: {
                readonly description: "Item identifier";
                readonly type: "string";
            };
            readonly itemQuantity: {
                readonly description: "Items quantity";
                readonly type: "integer";
            };
            readonly itemPrice: {
                readonly description: "Item price, if not sent, items registered price will be used";
                readonly type: "string";
            };
            readonly itemNote: {
                readonly description: "Item note";
                readonly type: "string";
            };
            readonly itemPaid: {
                readonly description: "If the item is already paid. Note: If set to true, a payment in cash will be registered for the total value of the item, taxes and fees. If this is not the expected behavior, set to false, and register the operation manually. If payments is set, itemPaid is ignored.";
                readonly type: "boolean";
                readonly default: false;
            };
            readonly saleDate: {
                readonly description: "posting date";
                readonly type: "string";
                readonly format: "date-time";
                readonly default: "current_timestamp";
            };
            readonly payments: {
                readonly description: "list of payments If the item is already paid";
                readonly type: "array";
                readonly items: {
                    readonly type: "object";
                    readonly properties: {
                        readonly paymentType: {
                            readonly description: "Payment method. Use the call [getPaymentMethods](#api-Payment-getPaymentMethods) to get the properties enabled payment methods.";
                            readonly type: "string";
                        };
                        readonly amount: {
                            readonly description: "payment amount";
                            readonly type: "number";
                        };
                        readonly notes: {
                            readonly description: "payment note";
                            readonly type: "string";
                        };
                    };
                };
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly success: {
                    readonly description: "Returns if the request could be completed";
                    readonly type: "boolean";
                };
                readonly data: {
                    readonly description: "Sold product details";
                    readonly type: "object";
                    readonly properties: {
                        readonly soldProductID: {
                            readonly description: "Sold product identifier (Usable to void this product in future).";
                            readonly type: "string";
                        };
                        readonly transactionID: {
                            readonly description: "Transaction identifier";
                            readonly type: "string";
                        };
                        readonly transactionStatus: {
                            readonly description: "Transaction Status is returned \"Pending\" when sale date is in the future.";
                            readonly type: "string";
                        };
                        readonly remainingItemQuantity: {
                            readonly description: "Remaining number of items in stock (if applicable)";
                            readonly type: "integer";
                        };
                        readonly reorderNeeded: {
                            readonly description: "true - Whether item is at or below value set for reorder threshold.";
                            readonly type: "boolean";
                        };
                        readonly stopSellMet: {
                            readonly description: "true - Whether item is at or below value set for stop-sell threshold.";
                            readonly type: "boolean";
                        };
                    };
                };
                readonly message: {
                    readonly description: "To be used in case any error occurs (if success = false). If success = true, it does not exist.";
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const Postitemcategory: {
    readonly formData: {
        readonly type: "object";
        readonly properties: {
            readonly propertyID: {
                readonly description: "Property ID";
                readonly type: "string";
            };
            readonly categoryName: {
                readonly description: "Category name";
                readonly type: "string";
            };
            readonly categoryCode: {
                readonly description: "Category code";
                readonly type: "string";
            };
            readonly itemID: {
                readonly description: "Existing ItemIDs to reassign to new category";
                readonly type: "array";
                readonly items: {
                    readonly type: "integer";
                };
            };
            readonly categoryColor: {
                readonly description: "Category color (like #3b7be7)";
                readonly type: "string";
                readonly default: "#ccc";
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly success: {
                    readonly description: "Returns if the request could be completed";
                    readonly type: "boolean";
                };
                readonly categoryID: {
                    readonly description: "Category unique identifier (if success = true)";
                    readonly type: "string";
                };
                readonly message: {
                    readonly description: "To be used in case any error occurs (if success = false). If success = true, it does not exist.";
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const Postitemstoinventory: {
    readonly formData: {
        readonly type: "object";
        readonly properties: {
            readonly item: {
                readonly description: "Items";
                readonly type: "object";
                readonly properties: {
                    readonly propertyID: {
                        readonly description: "Property ID";
                        readonly type: "string";
                    };
                    readonly itemName: {
                        readonly description: "Item name";
                        readonly type: "string";
                    };
                    readonly categoryID: {
                        readonly description: "Item category identifier";
                        readonly type: "string";
                    };
                    readonly itemType: {
                        readonly description: "Item type";
                        readonly type: "string";
                        readonly enum: readonly ["product", "service"];
                    };
                    readonly itemSKU: {
                        readonly description: "Item SKU. Will be generated if not set";
                        readonly type: "string";
                    };
                    readonly itemCode: {
                        readonly description: "Item code";
                        readonly type: "string";
                    };
                    readonly itemDescription: {
                        readonly description: "Item description";
                        readonly type: "string";
                    };
                    readonly itemPrice: {
                        readonly description: "Item price<br />When ItemPrice is blank the item will be created as Free / Complimentaty item without price";
                        readonly type: "number";
                    };
                    readonly stockInventory: {
                        readonly description: "Track stock inventory for this item";
                        readonly type: "boolean";
                        readonly default: false;
                    };
                    readonly itemQuantity: {
                        readonly description: "¹ Current amount of item available";
                        readonly type: "integer";
                    };
                    readonly reorderThreshold: {
                        readonly description: "¹ Quantity at which to reorder item";
                        readonly type: "integer";
                    };
                    readonly stopSellMet: {
                        readonly description: "¹ true - Whether item is at or below value set for stop-sell threshold.";
                        readonly type: "boolean";
                        readonly default: false;
                    };
                    readonly stopSell: {
                        readonly description: "¹ Quantity at which to stop selling product.";
                        readonly type: "integer";
                    };
                };
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly success: {
                    readonly description: "Returns if the request could be completed";
                    readonly type: "boolean";
                };
                readonly data: {
                    readonly description: "Sold product details";
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly itemID: {
                                readonly description: "Item identifier";
                                readonly type: "string";
                            };
                            readonly itemSKU: {
                                readonly description: " Item SKU";
                                readonly type: "string";
                            };
                            readonly itemName: {
                                readonly description: "Item name";
                                readonly type: "string";
                            };
                        };
                    };
                };
                readonly message: {
                    readonly description: "To be used in case any error occurs (if success = false). If success = true, it does not exist.";
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const Postnewhouseaccount: {
    readonly formData: {
        readonly type: "object";
        readonly properties: {
            readonly propertyID: {
                readonly description: "Property ID";
                readonly type: "string";
            };
            readonly accountName: {
                readonly description: "House Account name";
                readonly type: "string";
            };
            readonly isPrivate: {
                readonly description: "Whether House Account is available only to user";
                readonly type: "boolean";
                readonly default: false;
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly success: {
                    readonly description: "Returns if the request could be completed";
                    readonly type: "boolean";
                };
                readonly data: {
                    readonly description: "House Account details";
                    readonly type: "object";
                    readonly properties: {
                        readonly houseAccountID: {
                            readonly description: "Unique identifier of created House Account";
                            readonly type: "string";
                        };
                    };
                };
                readonly message: {
                    readonly description: "To be used in case any error occurs (if success = false). If success = true, it does not exist.";
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const Postpayment: {
    readonly formData: {
        readonly type: "object";
        readonly properties: {
            readonly propertyID: {
                readonly description: "Property ID";
                readonly type: "string";
            };
            readonly reservationID: {
                readonly description: "Reservation identifier";
                readonly type: "string";
            };
            readonly houseAccountID: {
                readonly description: "House Account identifier is necessary if reservationID not sent";
                readonly type: "string";
            };
            readonly subReservationID: {
                readonly description: "The Sub Reservation identifier. reservationID is still mandatory if subReservationID is sent.";
                readonly type: "string";
            };
            readonly type: {
                readonly description: "Payment type. Use the call [getPaymentMethods](#api-Payment-getPaymentMethods) to get the properties enabled payment methods.";
                readonly type: "string";
            };
            readonly amount: {
                readonly description: "Amount paid on this transaction";
                readonly type: "number";
            };
            readonly cardType: {
                readonly description: "If type = credit, cardType is necessary. Allowed values are property based, but possible strings are: \"visa\",\"master\",\"amex\",\"aura\",\"diners\",\"hiper\",\"elo\",\"Discover\",\"jcb\",\"maestro\",\"dan\",\"PostCard\",\"Eurocard\",\"union_pay\"";
                readonly type: "string";
            };
            readonly description: {
                readonly description: "Note to be added to payment";
                readonly type: "string";
            };
            readonly isDeposit: {
                readonly description: "determine if this payment is a deposit (default: false)";
                readonly type: "boolean";
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly success: {
                    readonly description: "Returns if the request could be completed";
                    readonly type: "boolean";
                };
                readonly paymentID: {
                    readonly description: "Returns paymentID of transaction";
                    readonly type: "string";
                };
                readonly transactionID: {
                    readonly description: "Returns transactionID";
                    readonly type: "string";
                };
                readonly message: {
                    readonly description: "To be used in case any error occurs (if success = false). If success = true, it does not exist.";
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const Postreservation: {
    readonly formData: {
        readonly type: "object";
        readonly properties: {
            readonly propertyID: {
                readonly description: "Property ID";
                readonly type: "string";
            };
            readonly sourceID: {
                readonly description: "The third-party source ID for this reservation.";
                readonly type: "string";
            };
            readonly thirdPartyIdentifier: {
                readonly description: "If it was received from a booking channel, this can be an identifier from that channel.";
                readonly type: "string";
            };
            readonly startDate: {
                readonly description: "Check-In date.";
                readonly type: "string";
                readonly format: "date";
            };
            readonly endDate: {
                readonly description: "Check-Out date.";
                readonly type: "string";
                readonly format: "date";
            };
            readonly guestFirstName: {
                readonly description: "First name of the guest";
                readonly type: "string";
            };
            readonly guestLastName: {
                readonly description: "Last name of the guest";
                readonly type: "string";
            };
            readonly guestGender: {
                readonly description: "";
                readonly type: "string";
                readonly enum: readonly ["M", "F", "N/A"];
            };
            readonly guestCountry: {
                readonly description: "Valid ISO-Code for Country (2 characters)";
                readonly type: "string";
            };
            readonly guestZip: {
                readonly description: "ZIP Code";
                readonly type: "string";
            };
            readonly guestEmail: {
                readonly description: "Guest email";
                readonly type: "string";
            };
            readonly guestPhone: {
                readonly description: "Guest main phone number";
                readonly type: "string";
            };
            readonly guestRequirements: {
                readonly description: "Object with guest requirements information.";
                readonly type: "array";
                readonly items: {
                    readonly type: "object";
                    readonly additionalProperties: true;
                };
            };
            readonly estimatedArrivalTime: {
                readonly description: "Estimated Arrival Time, 24-hour format.";
                readonly type: "string";
                readonly format: "time";
            };
            readonly rooms: {
                readonly description: "Array with quantity of rooms";
                readonly type: "array";
                readonly items: {
                    readonly type: "object";
                    readonly properties: {
                        readonly roomTypeID: {
                            readonly description: "Room Type ID";
                            readonly type: "string";
                        };
                        readonly quantity: {
                            readonly description: "Quantity of rooms for the room type ID";
                            readonly type: "integer";
                        };
                        readonly roomID: {
                            readonly description: "ID of the individual room to be booked. This feature must be enabled on \"MyBookings\" settings, and the room should be available at the time of the booking or else it will result in an unassigned room. It will automatically override \"quantity\" value to 1 and roomTypeID when used.";
                            readonly type: "string";
                        };
                        readonly roomRateID: {
                            readonly description: "Specific Rate ID used for the room type ID. Can be ommitted.";
                            readonly type: "string";
                        };
                    };
                };
            };
            readonly adults: {
                readonly description: "Array with number of adults";
                readonly type: "array";
                readonly items: {
                    readonly type: "object";
                    readonly properties: {
                        readonly roomTypeID: {
                            readonly description: "Room Type ID";
                            readonly type: "string";
                        };
                        readonly quantity: {
                            readonly description: "Quantity of adults for the room type ID";
                            readonly type: "integer";
                        };
                        readonly roomID: {
                            readonly description: "ID of the individual room";
                            readonly type: "string";
                        };
                    };
                };
            };
            readonly children: {
                readonly description: "Array with number of children";
                readonly type: "array";
                readonly items: {
                    readonly type: "object";
                    readonly properties: {
                        readonly roomTypeID: {
                            readonly description: "Room Type ID";
                            readonly type: "string";
                        };
                        readonly quantity: {
                            readonly description: "Number of children for the room type ID";
                            readonly type: "integer";
                        };
                        readonly roomID: {
                            readonly description: "ID of the individual room";
                            readonly type: "string";
                        };
                    };
                };
            };
            readonly paymentMethod: {
                readonly description: "Payment Method of choice.";
                readonly type: "string";
                readonly enum: readonly ["cash", "credit", "ebanking", "pay_pal"];
            };
            readonly cardToken: {
                readonly description: "Credit Card identifier. Payment Method must be credit. This field should be filled with credit card identifier according to gateway. Only available for Stripe and should send the Customer ID.";
                readonly type: "string";
            };
            readonly paymentAuthorizationCode: {
                readonly description: "Transaction identifier. Payment Method must be credit. This field should be filled with transaction identifier according to gateway. Only available for Stripe and it should be filled with Charge ID associated to the Payment Intent.";
                readonly type: "string";
            };
            readonly customFields: {
                readonly description: "Array with custom fields information";
                readonly type: "array";
                readonly items: {
                    readonly type: "object";
                    readonly properties: {
                        readonly fieldName: {
                            readonly description: "Internal custom field reference. Must match the registered name (shortcode) in backend. Pay Attention";
                            readonly type: "string";
                        };
                        readonly fieldValue: {
                            readonly description: "Custom field value. It's strictly forbidden to send unencrypted payment data through the API. Numeric values longer than 12 characters and considered valid by Luhn's algorithm will be rejected.";
                            readonly type: "string";
                        };
                    };
                };
            };
            readonly promoCode: {
                readonly description: "Promotional code. Required for specials and packages that uses it. \"rateID\" parameter required for using \"promoCode\".";
                readonly type: "string";
            };
            readonly allotmentBlockCode: {
                readonly description: "Allotment block code to add reservation to allotment block.";
                readonly type: "string";
            };
            readonly groupCode: {
                readonly description: "Code from the Aggregate Allotment block the reservation will be added to.";
                readonly type: "string";
            };
            readonly dateCreated: {
                readonly description: "Date reservation was made. Defaults to current date if omitted.";
                readonly type: "string";
                readonly format: "date-time";
            };
            readonly sendEmailConfirmation: {
                readonly description: "Send confirmation email to guest.";
                readonly type: "boolean";
                readonly default: true;
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly success: {
                    readonly description: "Returns if the request could be completed";
                    readonly type: "boolean";
                };
                readonly reservationID: {
                    readonly description: "Reservation identifier";
                    readonly type: "string";
                };
                readonly status: {
                    readonly description: "Reservation status<br /> 'not_confirmed' - Reservation is pending confirmation<br /> 'confirmed' - Reservation is confirmed<br />\n\n`not_confirmed` `confirmed`";
                    readonly type: "string";
                    readonly enum: readonly ["not_confirmed", "confirmed"];
                };
                readonly guestID: {
                    readonly description: "Guest ID";
                    readonly type: "string";
                };
                readonly guestFirstName: {
                    readonly description: "Guest First Name";
                    readonly type: "string";
                };
                readonly guestLastName: {
                    readonly description: "Guest Last Name";
                    readonly type: "string";
                };
                readonly guestGender: {
                    readonly description: "Guest Gender\n\n`M` `F` `N/A`";
                    readonly type: "string";
                    readonly enum: readonly ["M", "F", "N/A"];
                };
                readonly guestEmail: {
                    readonly description: "Guest Email";
                    readonly type: "string";
                };
                readonly startDate: {
                    readonly description: "Reservation CheckIn date";
                    readonly type: "string";
                    readonly format: "date";
                };
                readonly endDate: {
                    readonly description: "Reservation CheckOut date";
                    readonly type: "string";
                    readonly format: "date";
                };
                readonly dateCreated: {
                    readonly description: "Reservation creation datetime";
                    readonly type: "string";
                    readonly format: "date-time";
                };
                readonly grandTotal: {
                    readonly description: "Grand Total";
                    readonly type: "number";
                };
                readonly unassigned: {
                    readonly description: "unassigned rooms array";
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly subReservationID: {
                                readonly description: "";
                                readonly type: "string";
                            };
                            readonly roomTypeName: {
                                readonly description: "";
                                readonly type: "string";
                            };
                            readonly roomTypeID: {
                                readonly description: "";
                                readonly type: "string";
                            };
                            readonly adults: {
                                readonly description: "Adults included in rate";
                                readonly type: "integer";
                            };
                            readonly children: {
                                readonly description: "Children included in rate";
                                readonly type: "integer";
                            };
                            readonly dailyRates: {
                                readonly description: "rates for room";
                                readonly type: "array";
                                readonly items: {
                                    readonly type: "object";
                                    readonly properties: {
                                        readonly date: {
                                            readonly description: "";
                                            readonly type: "string";
                                            readonly format: "date";
                                        };
                                        readonly rate: {
                                            readonly description: "";
                                            readonly type: "number";
                                        };
                                    };
                                };
                            };
                            readonly roomTotal: {
                                readonly description: "";
                                readonly type: "number";
                            };
                        };
                    };
                };
                readonly message: {
                    readonly description: "To be used in case any error occurs (if success = false). If success = true, it does not exist.";
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const Postreservationdocument: {
    readonly formData: {
        readonly type: "object";
        readonly properties: {
            readonly propertyID: {
                readonly description: "Property ID";
                readonly type: "string";
            };
            readonly reservationID: {
                readonly description: "Reservation Unique Identifier";
                readonly type: "string";
            };
            readonly file: {
                readonly description: "Form-based File Upload<br/> Allowed file types: <code>*.pdf, *.rtf, *.doc, *.docx, *.txt, *.jpg, *.jpeg, *.png, *.gif, *.csv, *.xls, *.xlsx, *.xml</code><br/> Allowed max file size: 100MB";
                readonly type: "string";
                readonly format: "binary";
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly success: {
                    readonly description: "Returns if the request could be completed";
                    readonly type: "boolean";
                };
                readonly message: {
                    readonly description: "To be used in case any error occurs (if success = false). If success = true, it does not exist.";
                    readonly type: "string";
                };
                readonly data: {
                    readonly description: "Details for the uploaded file";
                    readonly type: "object";
                    readonly properties: {
                        readonly fileID: {
                            readonly description: "uploaded file identifier";
                            readonly type: "string";
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const Postreservationnote: {
    readonly formData: {
        readonly type: "object";
        readonly properties: {
            readonly propertyID: {
                readonly description: "Property ID";
                readonly type: "string";
            };
            readonly reservationID: {
                readonly description: "Reservation Unique Identifier";
                readonly type: "string";
            };
            readonly reservationNote: {
                readonly description: "Note to be added to reservation";
                readonly type: "string";
            };
            readonly userID: {
                readonly description: "User ID Identify the actual user that is posting the note";
                readonly type: "string";
            };
            readonly dateCreated: {
                readonly description: "Datetime the note was created.";
                readonly type: "string";
                readonly format: "date-time";
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly success: {
                    readonly description: "Returns if the request could be completed";
                    readonly type: "boolean";
                };
                readonly reservationNoteID: {
                    readonly description: "Reservation note ID";
                    readonly type: "string";
                };
                readonly message: {
                    readonly description: "To be used in case any error occurs (if success = false). If success = true, it does not exist.";
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const Postroomassign: {
    readonly formData: {
        readonly type: "object";
        readonly properties: {
            readonly propertyID: {
                readonly description: "Property ID";
                readonly type: "string";
            };
            readonly reservationID: {
                readonly description: "Reservation identifier";
                readonly type: "string";
            };
            readonly subReservationID: {
                readonly description: "Sub Reservation identifier";
                readonly type: "string";
            };
            readonly reservationRoomID: {
                readonly description: "Reservation room ID. Must be set if you want to unassign a room.";
                readonly type: "string";
            };
            readonly newRoomID: {
                readonly description: "Room ID of the room that will be assigned. Empty field must be sent if you want to unassign a room.";
                readonly type: "string";
            };
            readonly roomTypeID: {
                readonly description: "Room Type ID of the room that will be assigned. Need to be provided in case of assignment.";
                readonly type: "string";
            };
            readonly oldRoomID: {
                readonly description: "Room ID of the room that was assigned. Need to be provided in case of reassignment.";
                readonly type: "string";
            };
            readonly overrideRates: {
                readonly description: "Deprecated. Please use adjustPrice instead. Setting overrideRates=true will have the opposite of the effect that the name implies. It will cause the rates to NOT be overridden, but instead to be recalculated based on the new room assignment.";
                readonly type: "boolean";
                readonly default: false;
            };
            readonly adjustPrice: {
                readonly description: "If room assignment would result in an upcharge or discount, this parameter needs to be set to true to approve the charges. If not set, the rate will retain its original value.";
                readonly type: "boolean";
                readonly default: false;
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly success: {
                    readonly description: "Returns if the request could be completed";
                    readonly type: "boolean";
                };
                readonly message: {
                    readonly description: "To be used in case any error occurs (if success = false). If success = true, it does not exist.";
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const Postroomblock: {
    readonly formData: {
        readonly type: "object";
        readonly properties: {
            readonly propertyID: {
                readonly description: "Property ID";
                readonly type: "string";
            };
            readonly roomBlockType: {
                readonly description: "Room block type. ‘blocked’ - Room block. ‘out_of_service’ - Out of service block";
                readonly type: "string";
                readonly enum: readonly ["blocked", "out_of_service"];
            };
            readonly roomBlockReason: {
                readonly description: "Room block reason";
                readonly type: "string";
            };
            readonly startDate: {
                readonly description: "Room block start date";
                readonly type: "string";
                readonly format: "date";
            };
            readonly endDate: {
                readonly description: "Room block end date";
                readonly type: "string";
                readonly format: "date";
            };
            readonly rooms: {
                readonly description: "All rooms for room block. When multiple rooms are submitted they will be created under the same roomBlockID.";
                readonly type: "array";
                readonly items: {
                    readonly type: "object";
                    readonly properties: {
                        readonly roomID: {
                            readonly description: "Room ID";
                            readonly type: "string";
                        };
                        readonly roomTypeID: {
                            readonly description: "Room type ID";
                            readonly type: "string";
                        };
                    };
                };
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly success: {
                    readonly description: "Returns if the request could be completed";
                    readonly type: "boolean";
                };
                readonly propertyID: {
                    readonly description: "Property ID";
                    readonly type: "string";
                };
                readonly roomBlockID: {
                    readonly description: "Room block ID";
                    readonly type: "string";
                };
                readonly roomBlockType: {
                    readonly description: "Room block type. ‘blocked’ - Room block. ‘out_of_service’ - Out of service block\n\n`blocked` `out_of_service`";
                    readonly type: "string";
                    readonly enum: readonly ["blocked", "out_of_service"];
                };
                readonly roomBlockReason: {
                    readonly description: "Room block reason";
                    readonly type: "string";
                };
                readonly startDate: {
                    readonly description: "Room block start date";
                    readonly type: "string";
                    readonly format: "date";
                };
                readonly endDate: {
                    readonly description: "Room block end date";
                    readonly type: "string";
                    readonly format: "date";
                };
                readonly rooms: {
                    readonly description: "All rooms for room block";
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly roomID: {
                                readonly description: "Room ID";
                                readonly type: "string";
                            };
                            readonly roomTypeID: {
                                readonly description: "Room Type ID";
                                readonly type: "string";
                            };
                        };
                    };
                };
                readonly message: {
                    readonly description: "To be used in case any error occurs (if success = false).  If success = true, it does not exist.";
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const Postroomcheckin: {
    readonly formData: {
        readonly type: "object";
        readonly properties: {
            readonly propertyID: {
                readonly description: "Property ID";
                readonly type: "string";
            };
            readonly reservationID: {
                readonly description: "Reservation identifier";
                readonly type: "string";
            };
            readonly subReservationID: {
                readonly description: "Sub Reservation identifier, allows for granular control over what room is being checked-in. If sent, roomID is ignored.";
                readonly type: "string";
            };
            readonly roomID: {
                readonly description: "Room ID of the room that will be checked-in.";
                readonly type: "string";
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly success: {
                    readonly description: "Returns if the request could be completed";
                    readonly type: "boolean";
                };
                readonly message: {
                    readonly description: "To be used in case any error occurs (if success = false). If success = true, it does not exist.";
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const Postroomcheckout: {
    readonly formData: {
        readonly type: "object";
        readonly properties: {
            readonly propertyID: {
                readonly description: "Property ID";
                readonly type: "string";
            };
            readonly reservationID: {
                readonly description: "Reservation identifier";
                readonly type: "string";
            };
            readonly subReservationID: {
                readonly description: "Sub Reservation identifier, allows for granular control over what room is being checked out. If sent, roomID is ignored.";
                readonly type: "string";
            };
            readonly roomID: {
                readonly description: "Room ID of the room that will be checked out.";
                readonly type: "string";
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly success: {
                    readonly description: "Returns if the request could be completed";
                    readonly type: "boolean";
                };
                readonly message: {
                    readonly description: "To be used in case any error occurs (if success = false). If success = true, it does not exist.";
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const Postvoiditem: {
    readonly formData: {
        readonly type: "object";
        readonly properties: {
            readonly propertyID: {
                readonly description: "Property ID";
                readonly type: "string";
            };
            readonly reservationID: {
                readonly description: "Reservation identifier. Required if no houseAccountID or groupCode is provided.";
                readonly type: "string";
            };
            readonly houseAccountID: {
                readonly description: "House Account identifier. Required if no reservationID or groupCode is provided.";
                readonly type: "string";
            };
            readonly groupCode: {
                readonly description: "Group identifier. Required if no reservationID or houseAccountID is provided.";
                readonly type: "string";
            };
            readonly soldProductID: {
                readonly description: "Item identifier";
                readonly type: "string";
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly success: {
                    readonly description: "Returns if the request could be completed";
                    readonly type: "boolean";
                };
                readonly message: {
                    readonly description: "To be used in case any error occurs (if success = false). If success = true, it does not exist.";
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const Postvoidpayment: {
    readonly formData: {
        readonly type: "object";
        readonly properties: {
            readonly propertyID: {
                readonly description: "Property ID";
                readonly type: "string";
            };
            readonly reservationID: {
                readonly description: "Reservation identifier";
                readonly type: "string";
            };
            readonly houseAccountID: {
                readonly description: "House Account identifier is necessary if reservationID not sent";
                readonly type: "string";
            };
            readonly paymentID: {
                readonly description: "paymentID of transaction that should be voided.";
                readonly type: "string";
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly success: {
                    readonly description: "Returns if the request could be completed";
                    readonly type: "boolean";
                };
                readonly message: {
                    readonly description: "To be used in case any error occurs (if success = false). If success = true, it does not exist.";
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const Postwebhook: {
    readonly formData: {
        readonly type: "object";
        readonly properties: {
            readonly propertyID: {
                readonly description: "Property ID";
                readonly type: "string";
            };
            readonly object: {
                readonly description: "Event object";
                readonly type: "string";
            };
            readonly action: {
                readonly description: "Event action";
                readonly type: "string";
            };
            readonly endpointUrl: {
                readonly description: "Endpoint URL";
                readonly type: "string";
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly success: {
                    readonly description: "Returns if the request could be completed";
                    readonly type: "boolean";
                };
                readonly data: {
                    readonly description: "Subscription details";
                    readonly type: "object";
                    readonly properties: {
                        readonly subscriptionID: {
                            readonly description: "Subscription ID";
                            readonly type: "string";
                        };
                    };
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const Putguest: {
    readonly formData: {
        readonly type: "object";
        readonly properties: {
            readonly propertyID: {
                readonly description: "Property ID";
                readonly type: "string";
            };
            readonly guestID: {
                readonly description: "Valid Guest ID";
                readonly type: "string";
            };
            readonly guestFirstName: {
                readonly description: "";
                readonly type: "string";
            };
            readonly guestLastName: {
                readonly description: "";
                readonly type: "string";
            };
            readonly guestGender: {
                readonly description: "";
                readonly type: "string";
                readonly enum: readonly ["M", "F", "N/A"];
            };
            readonly guestEmail: {
                readonly description: "";
                readonly type: "string";
            };
            readonly guestPhone: {
                readonly description: "";
                readonly type: "string";
            };
            readonly guestCellPhone: {
                readonly description: "";
                readonly type: "string";
            };
            readonly guestAddress1: {
                readonly description: "";
                readonly type: "string";
            };
            readonly guestAddress2: {
                readonly description: "";
                readonly type: "string";
            };
            readonly guestCity: {
                readonly description: "";
                readonly type: "string";
            };
            readonly guestCountry: {
                readonly description: "ISO-Code for Country (2 characters)";
                readonly type: "string";
            };
            readonly guestState: {
                readonly description: "";
                readonly type: "string";
            };
            readonly guestZip: {
                readonly description: "";
                readonly type: "string";
            };
            readonly guestBirthDate: {
                readonly description: "";
                readonly type: "string";
                readonly format: "date";
            };
            readonly guestDocumentType: {
                readonly description: "It is mandatory to send all document information<br /> na - non selection<br /> dni - Identity card<br /> nie - Residence permit<br />";
                readonly type: "string";
                readonly enum: readonly ["na", "driver_licence", "student_id", "passport", "dni", "nie", "social_security_card"];
            };
            readonly guestDocumentNumber: {
                readonly description: "(mandatory when guestDocumentType is sent)";
                readonly type: "string";
            };
            readonly guestDocumentIssueDate: {
                readonly description: "(mandatory when guestDocumentType is sent and is not DNI)";
                readonly type: "string";
                readonly format: "date";
            };
            readonly guestDocumentIssuingCountry: {
                readonly description: "ISO-Code for Country (2 characters) (mandatory when guestDocumentType is sent)";
                readonly type: "string";
            };
            readonly guestDocumentExpirationDate: {
                readonly description: "(mandatory when guestDocumentType is sent and is not DNI or NIE)";
                readonly type: "string";
                readonly format: "date";
            };
            readonly guestRequirements: {
                readonly description: "Object with guest requirements information.";
                readonly type: "array";
                readonly items: {
                    readonly type: "object";
                    readonly additionalProperties: true;
                };
            };
            readonly guestCustomFields: {
                readonly description: "";
                readonly type: "array";
                readonly items: {
                    readonly type: "object";
                    readonly properties: {
                        readonly customFieldName: {
                            readonly description: "";
                            readonly type: "string";
                        };
                        readonly customFieldValue: {
                            readonly description: "Custom field value. It's strictly forbidden to send unencrypted payment data through the API. Numeric values longer than 12 characters and considered valid by Luhn's algorithm will be rejected.";
                            readonly type: "string";
                        };
                    };
                };
            };
            readonly guestCompanyName: {
                readonly description: "Guest company name";
                readonly type: "string";
            };
            readonly guestCompanyTaxId: {
                readonly description: "Guest company tax ID";
                readonly type: "string";
            };
            readonly guestTaxId: {
                readonly description: "Guest tax ID unencrypted payment data through the API. Numeric values longer than 12 characters and considered valid by Luhn's algorithm will be rejected.";
                readonly type: "string";
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly success: {
                    readonly description: "Returns if the request could be completed";
                    readonly type: "boolean";
                };
                readonly message: {
                    readonly description: "To be used in case any error occurs (if success = false), or in case any warning message is needed. If success = true, it usually does not exist.";
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const Putguestnote: {
    readonly formData: {
        readonly type: "object";
        readonly properties: {
            readonly propertyID: {
                readonly description: "Property ID";
                readonly type: "string";
            };
            readonly guestID: {
                readonly description: "Guest ID";
                readonly type: "string";
            };
            readonly noteID: {
                readonly description: "Note ID";
                readonly type: "string";
            };
            readonly guestNote: {
                readonly description: "Note to be added to guest profile. It's strictly forbidden to send unencrypted payment data through the API. Numeric values longer than 12 characters and considered valid by Luhn's algorithm will be rejected.";
                readonly type: "string";
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly success: {
                    readonly description: "Returns if the request could be completed";
                    readonly type: "boolean";
                };
                readonly message: {
                    readonly description: "To be used in case any error occurs (if success = false). If success = true, it does not exist.";
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const Puthouseaccountstatus: {
    readonly formData: {
        readonly type: "object";
        readonly properties: {
            readonly propertyID: {
                readonly description: "Property ID";
                readonly type: "string";
            };
            readonly houseAccountID: {
                readonly description: "House Account ID";
                readonly type: "string";
            };
            readonly status: {
                readonly description: "House Account status";
                readonly type: "string";
                readonly enum: readonly ["open", "closed"];
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly success: {
                    readonly description: "Returns if the request could be completed";
                    readonly type: "boolean";
                };
                readonly message: {
                    readonly description: "To be used in case any error occurs (if success = false). If success = true, it does not exist.";
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const Puthousekeeper: {
    readonly formData: {
        readonly type: "object";
        readonly properties: {
            readonly propertyID: {
                readonly description: "Property ID";
                readonly type: "string";
            };
            readonly name: {
                readonly description: "Housekeeper name";
                readonly type: "string";
            };
            readonly housekeeperID: {
                readonly description: "Housekeeper ID";
                readonly type: "string";
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly success: {
                    readonly description: "Returns if the request could be completed";
                    readonly type: "boolean";
                };
                readonly message: {
                    readonly description: "To be used in case any error occurs (if success = false). If success = true, it does not exist.";
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const Putitemtoinventory: {
    readonly formData: {
        readonly type: "object";
        readonly properties: {
            readonly propertyID: {
                readonly description: "Property ID";
                readonly type: "string";
            };
            readonly itemID: {
                readonly description: "Item identifier";
                readonly type: "string";
            };
            readonly itemName: {
                readonly description: "Item name";
                readonly type: "string";
            };
            readonly itemType: {
                readonly description: "Item type";
                readonly type: "string";
                readonly enum: readonly ["product", "service"];
            };
            readonly itemSKU: {
                readonly description: "Item SKU. Will be generated if not set";
                readonly type: "string";
            };
            readonly itemCode: {
                readonly description: "Item code";
                readonly type: "string";
            };
            readonly itemDescription: {
                readonly description: "Item description";
                readonly type: "string";
            };
            readonly itemPrice: {
                readonly description: "Item price";
                readonly type: "number";
            };
            readonly stockInventory: {
                readonly description: "Track stock inventory for this item";
                readonly type: "boolean";
            };
            readonly itemQuantity: {
                readonly description: "¹ Current amount of item available";
                readonly type: "integer";
            };
            readonly reorderThreshold: {
                readonly description: "¹ Quantity at which to reorder item";
                readonly type: "integer";
            };
            readonly stopSellMet: {
                readonly description: "¹ true - Whether item is at or below value set for stop-sell threshold.";
                readonly type: "boolean";
            };
            readonly stopSell: {
                readonly description: "¹ Quantity at which to stop selling product.";
                readonly type: "integer";
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly success: {
                    readonly description: "Returns if the request could be completed";
                    readonly type: "boolean";
                };
                readonly message: {
                    readonly description: "To be used in case any error occurs (if success = false). If success = true, it does not exist.";
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const Putreservation: {
    readonly formData: {
        readonly type: "object";
        readonly properties: {
            readonly propertyID: {
                readonly description: "Property ID";
                readonly type: "string";
            };
            readonly reservationID: {
                readonly description: "Reservation Unique Identifier, one reservation ID per call.";
                readonly type: "string";
            };
            readonly estimatedArrivalTime: {
                readonly description: "Estimated Arrival Time, 24-hour format.";
                readonly type: "string";
                readonly format: "time";
            };
            readonly status: {
                readonly description: "Reservation status<br /> 'confirmed' - Reservation is confirmed<br /> 'not_confirmed' - Reservation not passed confirmation<br /> 'canceled' - Reservation is canceled<br /> 'checked_in' - Guest is in hotel<br /> 'checked_out' - Guest already left hotel<br /> 'no_show' - Guest didn't showed up on check-in date";
                readonly type: "string";
                readonly enum: readonly ["confirmed", "not_confirmed", "canceled", "checked_in", "checked_out", "no_show"];
            };
            readonly checkoutDate: {
                readonly description: "Update the checkoutDate across the whole reservation";
                readonly type: "string";
                readonly format: "date";
            };
            readonly customFields: {
                readonly description: "Array with custom fields information";
                readonly type: "array";
                readonly items: {
                    readonly type: "object";
                    readonly properties: {
                        readonly customFieldName: {
                            readonly description: "Internal custom field reference. Must match the registered name (shortcode) in backend. Pay Attention";
                            readonly type: "string";
                        };
                        readonly customFieldValue: {
                            readonly description: "Custom field value. It's strictly forbidden to send unencrypted payment data through the API. Numeric values longer than 12 characters and considered valid by Luhn's algorithm will be rejected.";
                            readonly type: "string";
                        };
                    };
                };
            };
            readonly rooms: {
                readonly description: "Array with rooms information to change accommodations assigned to the reservation";
                readonly type: "array";
                readonly items: {
                    readonly type: "object";
                    readonly properties: {
                        readonly subReservationID: {
                            readonly description: "Sub Reservation ID of the specific assigned room. Optional.";
                            readonly type: "string";
                        };
                        readonly roomTypeID: {
                            readonly description: "Room Type ID. Mandatory if rooms are sent.";
                            readonly type: "string";
                        };
                        readonly checkinDate: {
                            readonly description: "Check-in date for this specific room. Mandatory if rooms are sent.";
                            readonly type: "string";
                            readonly format: "date";
                        };
                        readonly checkoutDate: {
                            readonly description: "Check-out date for this specific room. Mandatory if rooms are sent.";
                            readonly type: "string";
                            readonly format: "date";
                        };
                        readonly adults: {
                            readonly description: "Quantity of adults for the room. Mandatory if rooms are sent.";
                            readonly type: "integer";
                        };
                        readonly children: {
                            readonly description: "Number of children for the room. Mandatory if rooms are sent.";
                            readonly type: "integer";
                        };
                        readonly rateID: {
                            readonly description: "Rate ID for the room. Optional.";
                            readonly type: "string";
                        };
                    };
                };
            };
            readonly dateCreated: {
                readonly description: "Date reservation was made. Do not change if omitted.";
                readonly type: "string";
                readonly format: "date-time";
            };
            readonly sendStatusChangeEmail: {
                readonly description: "Send email on reservation status change to property and guest.";
                readonly type: "boolean";
                readonly default: false;
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly success: {
                    readonly description: "Returns if the request could be completed";
                    readonly type: "boolean";
                };
                readonly message: {
                    readonly description: "To be used in case any error occurs.";
                    readonly type: "string";
                };
                readonly data: {
                    readonly description: "Returns the reservation data as defined by getReservation call.";
                    readonly type: "object";
                    readonly additionalProperties: true;
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const Putreservationnote: {
    readonly formData: {
        readonly type: "object";
        readonly properties: {
            readonly propertyID: {
                readonly description: "Property ID";
                readonly type: "string";
            };
            readonly reservationID: {
                readonly description: "Reservation Unique Identifier";
                readonly type: "string";
            };
            readonly reservationNoteID: {
                readonly description: "Reservation Note ID";
                readonly type: "string";
            };
            readonly reservationNote: {
                readonly description: "Note to be added to reservation";
                readonly type: "string";
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly success: {
                    readonly description: "Returns if the request could be completed";
                    readonly type: "boolean";
                };
                readonly message: {
                    readonly description: "To be used in case any error occurs (if success = false). If success = true, it does not exist.";
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const Putroomblock: {
    readonly formData: {
        readonly type: "object";
        readonly properties: {
            readonly propertyID: {
                readonly description: "Property ID";
                readonly type: "string";
            };
            readonly roomBlockID: {
                readonly description: "Room block ID";
                readonly type: "string";
            };
            readonly roomBlockReason: {
                readonly description: "Room block reason";
                readonly type: "string";
            };
            readonly startDate: {
                readonly description: "Room block start date";
                readonly type: "string";
                readonly format: "date";
            };
            readonly endDate: {
                readonly description: "Room block end date";
                readonly type: "string";
                readonly format: "date";
            };
            readonly rooms: {
                readonly description: "All rooms for room block. When multiple rooms are submitted they will be created under the same roomBlockID.";
                readonly type: "array";
                readonly items: {
                    readonly type: "object";
                    readonly properties: {
                        readonly roomID: {
                            readonly description: "Room ID";
                            readonly type: "string";
                        };
                        readonly roomTypeID: {
                            readonly description: "Room type ID";
                            readonly type: "string";
                        };
                    };
                };
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly success: {
                    readonly description: "Returns if the request could be completed";
                    readonly type: "boolean";
                };
                readonly propertyID: {
                    readonly description: "Property ID";
                    readonly type: "string";
                };
                readonly roomBlockID: {
                    readonly description: "Room block ID";
                    readonly type: "string";
                };
                readonly roomBlockType: {
                    readonly description: "Room block type. ‘blocked’ - Room block. ‘out_of_service’ - Out of service block\n\n`blocked` `out_of_service`";
                    readonly type: "string";
                    readonly enum: readonly ["blocked", "out_of_service"];
                };
                readonly roomBlockReason: {
                    readonly description: "Room block reason";
                    readonly type: "string";
                };
                readonly startDate: {
                    readonly description: "Room block start date";
                    readonly type: "string";
                    readonly format: "date";
                };
                readonly endDate: {
                    readonly description: "Room block end date";
                    readonly type: "string";
                    readonly format: "date";
                };
                readonly rooms: {
                    readonly description: "All rooms for room block";
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly roomID: {
                                readonly description: "Room ID";
                                readonly type: "string";
                            };
                            readonly roomTypeID: {
                                readonly description: "Room Type ID";
                                readonly type: "string";
                            };
                        };
                    };
                };
                readonly message: {
                    readonly description: "To be used in case any error occurs (if success = false).  If success = true, it does not exist.";
                    readonly type: "string";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
export { Deleteadjustment, Deleteguestnote, Deletereservationnote, Deleteroomblock, Deletewebhook, GetListallotmentblocknotes, GetOauthMetadata, GetUserinfo, Getallotmentblocks, Getapppropertysettings, Getappsettings, Getappstate, Getavailableroomtypes, Getcurrencysettings, Getcustomfields, Getdashboard, Getemailschedule, Getemailtemplates, Getfiles, Getgroupnotes, Getgroups, Getguest, Getguestlist, Getguestnotes, Getguestsbyfilter, Getguestsbystatus, Getguestsmodified, Gethoteldetails, Gethotels, Gethouseaccountlist, Gethousekeepers, Gethousekeepingstatus, Getinvoice, Getitem, Getitemcategories, Getitems, Getpackagenames, Getpackages, Getpaymentmethods, Getpaymentscapabilities, Getrate, Getratejobs, Getrateplans, Getreservation, Getreservationassignments, Getreservationinvoiceinformation, Getreservationnotes, Getreservationroomdetails, Getreservations, Getreservationswithratedetails, Getroomblocks, Getrooms, Getroomsfeesandtaxes, Getroomsunassigned, Getroomtypes, Getsources, Gettaxesandfees, Getusers, Getwebhooks, PostAccessToken, PostAppendcustomitem, PostCreateallotmentblock, PostCreateallotmentblocknotes, PostDeleteallotmentblock, PostDeleteapppropertysettings, PostPatchgroup, PostPatchinvoice, PostPatchrate, PostPutapppropertysettings, PostPutgroup, PostPutrate, PostUpdateallotmentblock, PostUpdateallotmentblocknotes, Postadjustment, Postapperror, Postapppropertysettings, Postappstate, Postcharge, Postcreditcard, Postcustomfield, Postcustomitem, Postcustompaymentmethod, Postemailschedule, Postemailtemplate, Postfile, Postgovernmentreceipt, Postgroupnote, Postguest, Postguestdocument, Postguestnote, Postguestphoto, Postgueststoroom, Posthousekeeper, Posthousekeepingassignment, Posthousekeepingstatus, Postitem, Postitemcategory, Postitemstoinventory, Postnewhouseaccount, Postpayment, Postreservation, Postreservationdocument, Postreservationnote, Postroomassign, Postroomblock, Postroomcheckin, Postroomcheckout, Postvoiditem, Postvoidpayment, Postwebhook, Putguest, Putguestnote, Puthouseaccountstatus, Puthousekeeper, Putitemtoinventory, Putreservation, Putreservationnote, Putroomblock };
