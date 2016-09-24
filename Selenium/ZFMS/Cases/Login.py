# -*- coding: utf-8 -*-
from selenium import webdriver
import time
#from selenium.webdriver.common.keys import Keys

# 启动浏览器，打开ZFMS登录页
#driver = webdriver.Firefox()
driver = webdriver.Chrome()
driver.get('http://192.168.31.237:8090/bw_sms')
driver.maximize_window()

# 登录
login_id = driver.find_element_by_name('username')
login_pass = driver.find_element_by_name('password')
login_submit = driver.find_element_by_link_text('登录')
#frame83 = driver.find_element_by_xpath("//iframe[@id='83']")
#driver.switch_to.frame('83')
#bt_add = driver.find_element_by_xpath("//div[@class='panel-toolbar']//a/span/parent::a[contains(text(),'添加')]")
login_id.send_keys('admin')
login_pass.send_keys('1')
login_submit.click()

''' 表单管理'''
# 自定义表

driver.find_element_by_id('80').click() #打开流程管理
driver.find_element_by_id('leftTree_2_span').click() #打开自定义表
time.sleep(2)
driver.switch_to.frame('83')
bt_add = driver.find_element_by_xpath("//div[@class='panel-toolbar']//a/span/parent::a[contains(text(),'添加')]")
bt_add.click()
time.sleep(2)





# 退出并闭关
#driver.close()
driver.quit()