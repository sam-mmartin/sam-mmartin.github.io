<?php 
function get_post_id() {
    return get_the_ID();
}

function getPostViews() {
    $postID = get_post_id();
    $count_key = 'post_views_count';
    $count = get_post_meta($postID, $count_key, true);

    if($count == '') {
        delete_post_meta($postID, $count_key);
        add_post_meta($postID, $count_key, '0');
        return ('Nenhuma visualização');
    }
    if($count == 1) {
        return ('1 execução');
    }
    return $count ('execuções');
}
add_action('wp_head', 'setPostViews');
function setPostViews() {
    $postID = get_post_id();
    $count_key = 'post_views_count';
    $count = get_post_meta($postID, $count_key, true);
    
    if($count==''){
        $count = 0;
        delete_post_meta($postID, $count_key);
        add_post_meta($postID, $count_key, '0');
    } else {
        $count++;
        update_post_meta($postID, $count_key, $count);
    }
}
?>