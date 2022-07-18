<template>
  <header>
    <!-- 漢堡排 checkbox -->
    <input type="checkbox" class="navbar-toggle" id="navbar-toggle" />

    <!-- 漢堡排圖示 -->
    <label for="navbar-toggle" class="navbar-toggle-label">
      <span class="hamburger"></span>
    </label>

    <!-- logo -->
    <div class="logo-container">
      <div class="brand-logo"></div>
    </div>

    <!-- menu -->
    <nav class="nav">
      <ul class="nav-list">
        <li class="nav-item">
          <a href="#" class="nav-link">男款</a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link">女款</a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link">最新消息</a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link">聯絡我們</a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link">客製商品</a>
        </li>
      </ul>

      <!-- logo -->
      <div class="logo-container-computer">
        <div class="brand-logo-computer"></div>
      </div>

      <div class="nav-tool">
        <i class="nav-tool-icon fa-solid fa-magnifying-glass"></i>
        <i class="nav-tool-icon fa-solid fa-cart-shopping"></i>
        <i class="nav-tool-icon fa-regular fa-moon"></i>
      </div>
    </nav>
  </header>
</template>
