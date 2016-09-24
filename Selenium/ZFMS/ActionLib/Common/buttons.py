# -*- coding: utf-8 -*-
from selenium import webdriver
# 例：类定义及使用
class CAnimal:
    name = 'unname' # 成员变量
    def __init__(self,voice='hello'):    # 重载构造函数
        self.voice = voice            # 创建成员变量并赋初始值
    def __del__(self):              # 重载析构函数
        pass                # 空操作
    def Say(self):
        print self.voice

t = CAnimal()        # 定义动物对象t
t.Say()        # t说话
#>> hello            # 输出
dog = CAnimal('wow')    # 定义动物对象dog
dog.Say()            # dog说话
#>> wow            # 输出
driver = webdriver.Firefox()
class Buttons:
    username = 'username'
    password = 'password'
    def login_id(self):
        driver.find_element_by_name('username')
        pass
    def login_name(self):
        driver.find_element_by_name('password').click()
        pass
    def login_submit(self):
        driver.find_element_by_link_text('登录')
        pass


bt1 = Buttons()
driver.get('http://192.168.31.237:8090/bw_sms')
bt1.login_id().send_keys





















