<template>
    <div>
        <h3>menu</h3>
        <ul>
            <li><router-link to="/">home</router-link></li>
            <li><router-link to="/login">login</router-link></li>
            <li><router-link to="/register">register</router-link></li>
            <li>account</li>
            <li><router-link to="/cart">cart</router-link></li>
        </ul>
        <h3>category</h3>
        <ul>
            <li><router-link to="/category/javascript">javascript</router-link></li>
            <li><router-link to="/category/php">php</router-link></li>
            <li><router-link to="/category/swift">swift</router-link></li>
        </ul>
    </div>
</template>
