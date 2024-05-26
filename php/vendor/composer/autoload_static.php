<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInitd6527cd4552362b488edec204863ebea
{
    public static $prefixLengthsPsr4 = array (
        'P' => 
        array (
            'Predis\\' => 7,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'Predis\\' => 
        array (
            0 => __DIR__ . '/..' . '/predis/predis/src',
        ),
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInitd6527cd4552362b488edec204863ebea::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInitd6527cd4552362b488edec204863ebea::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInitd6527cd4552362b488edec204863ebea::$classMap;

        }, null, ClassLoader::class);
    }
}