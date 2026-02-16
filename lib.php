<?php
defined('MOODLE_INTERNAL') || die();

/**
 * Add react demo link to the frontpage.
 */
function local_reactdemo_before_footer() {
    global $PAGE;

    if ($PAGE->pagetype === 'local-reactdemo-index') {
        return;
    }

    // Add a link under the frontpage navigation.
    $url  = new moodle_url('/local/reactdemo');
    echo html_writer::div(
        html_writer::link($url, get_string('pluginname', 'local_reactdemo'), ['class' => 'btn btn-primary']),
        'local-reactdemo-home-link mt-3'
    );
}