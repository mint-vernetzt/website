<?php
add_theme_support( 'post-thumbnails' );

function register_menus() {
    register_nav_menus(
        [
            'website-menu' => __( 'Gatsby Menu' ),
        ]
    );
}
add_action( 'init', 'register_menus' );




add_filter( 'manage_websitemenu_posts_columns', 'mv_filter_posts_columns' );
function mv_filter_posts_columns( $columns ) {
    $columns['type'] = __( 'Type' );

    return $columns;
}


add_action( 'manage_websitemenu_posts_custom_column', 'mv_websitemenu_column', 10, 2);
function mv_websitemenu_column( $column, $post_id ) {
    // Image column
    if ( 'type' === $column ) {
        echo get_post_meta($post_id, 'menutype', true);
    }
}
