common_base_events: 
    [ 
        'homepage', 
        'product_page', 
        'checkout',   
        'brand_page', 
        'basket_visit', 
        'basket_add', 
        'search_page', 
        'list_page',
        'landing_page',
    ] 

other_base_events: 
    [ 
        'login_page', 
        'quick_buy_modal_shown',
        'registration_page',  
        'login_page', 
        'login_or_account_creation', 
        'account_home_page', 
        'help_centre_page', 
        'cookie_consent_show', 
        'cart_interaction_event', 
        'wishlist_interaction_event', 
        'basket_add_from_rec_rail', 
    ] 

 

{
    'global_financial':
    [
        'rpv', 
        'cr', 
        'aov'
    ],
    'global_web_core':
    [
        'bounce_rate',
        'navigation_time',
        'dom_interactive_time',
        'dom_ready_time',
        'largest_contentful_paint_time',
        'first_input_delay',
        'cumulative_layout_shift',
        'first_contentful_paint_time',
        'first_byte_time',
    ]
    'homepage': 
    {
        defaults: ['rpv', 'cr', 'aov', ['base', 'basket_add']],
        optional: [], 
    },
    'product_page': 
    {
        defaults: 
        [
            ['base', 'search_page'],
            ['base', 'product_page'],
            ['product_page', 'basket_add'], 
            ['base', 'ddl_product_list_visit'],
            ['base', 'no_search_results'],
            ['base', 'basket_add'],
            ['base', 'basket_visit'],
            ['base', 'checkout'],
        ]
        optional: [], 
    },
    'checkout': 
    {
        defaults: 
        [
            ['base', 'delivery_stage'], 
            ['delivery_stage', 'payment_stage'],
            ['base', 'guest_checkout'], 
            ['base', 'standard_checkout'],
            ['base', 'payment_stage'],
        ],
        optional: 
        [
            ['base', 'login_page_from_checkout_button'], 
            ['base', 'login_page_guest_checkout_opt_in'],
            ['base', 'delivery_option_change'], 
            ['base', 'guest_checkout_opt_in'],
            ['base', 'guest_checkout_opt_in_error'], 
            ['base', 'payment_collapser_shown'],
            ['base', 'expanded_payment_collapser'], 
            ['base', 'click_and_collect_available'],
            ['base', 'click_and_collect_interacted'],
            ['base', 'click_and_collect_placed'], 
            ['base', 'stored_address_change'],
            ['base', 'eco_shown'], 
            ['base', 'eco_selected'],
            ['base', 'eco_placed'],
            ['eco_shown', 'eco_placed']
        ]
    },
    'brand_page': 
    {
        defaults: ['rpv', 'cr', 'aov', ['base', 'basket_add']],
        optional: [], 
    },
    'basket_visit': 
    {
        defaults: ['rpv', 'cr', 'aov', ['base', 'basket_add']],
        optional: [], 
    },
    'quick_buy_modal_shown': 
    {
        defaults: ['rpv', 'cr', 'aov', ['base', 'basket_add']],
        optional: [], 
    },
    'basket_add': 
    {
        defaults: ['rpv', 'cr', 'aov', ['base', 'basket_add']],
        optional: [], 
    },
    'search_page': 
    {
        defaults: 
        [
            ['base', 'search_page'],
            ['base', 'product_page'],
            ['product_page', 'basket_add'], 
            ['base', 'ddl_product_list_visit'],
            ['base', 'no_search_results'],
            ['base', 'basket_add'],
            ['base', 'basket_visit'],
            ['base', 'checkout'],
        ],
        optional: 
        [
            ['base', 'brand_search'], 
            ['base', 'search_bar_click'], 
            ['base', 'wishlist_heart_icon_click'], 
            ['base', 'wishlist_interaction_event'],
            ['base', 'quick_buy_modal_shown'],
            ['base', 'search_dropdown_blog_click'], 
            ['base', 'search_dropdown_best_sellers_click'],
        ]
    },
    'list_page': 
    {
        defaults: ['rpv', 'cr', 'aov', ['base', 'basket_add']],
        optional: [], 
    },
    'landing_page': 
    {
        defaults: ['rpv', 'cr', 'aov', ['base', 'basket_add']],
        optional: [], 
    },
}

    