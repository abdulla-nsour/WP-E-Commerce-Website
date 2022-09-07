<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'nsour2' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', 'an6316556' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '#l8-} o6giQ8GCvmF&<Ji%Ta0.VVJ;iUluZ^ZKV~_tg@|PSK:#0.#h4$_gPV`;F~' );
define( 'SECURE_AUTH_KEY',  '(3[`%E?E7Jt`Y9w&/E2P534m^$?EN`%,i~7_fUY13+ru2 YA:ZD2PNSpN}}Y61$1' );
define( 'LOGGED_IN_KEY',    ' L&1eKe]Q%e+E7]FwD.Hjnzn%x5!j]Xrz5vFcg)6Q[Fu aIr`3nQtA>V/hlyem@h' );
define( 'NONCE_KEY',        'YfZ$~C|vLY_dCL9C6.}bTt/}:-Rq)V_tc;^8Nw=>l91!Vt.F]}(+0Eo?2-2 j[R/' );
define( 'AUTH_SALT',        '`s#]d(5JZA?vY04iF}0AShH--kVhc C,/{4]JiFcd<##6r+kAY1<k@9k#9~~Ttqi' );
define( 'SECURE_AUTH_SALT', '<+S7ZO/R5K24D*YqPmac]uL=,`CcOSR4<N|FSZ(t]fKRg[M2G8#a3*L@}NP]KxN>' );
define( 'LOGGED_IN_SALT',   'bdPWib-A2`5<KQ+WBsk3K>eveMX@>);-JU*/up!!j31a5^9`J]3jkf/*B]op|mb4' );
define( 'NONCE_SALT',       ']8g;@>#[cg[C;x0l{OA%M!a:C;^(0+D.PqQWBp@F Ol7%iS4;5>XU8B|C4KZmWaa' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
