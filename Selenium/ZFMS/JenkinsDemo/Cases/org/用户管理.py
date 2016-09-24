# encoding: utf-8
import unittest
import time
from selenium import webdriver
from args import global_args, elements

g = global_args
e = elements

# ------------------用户管理-----------------------

class ZfmsOrg(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        # create a new firefox session
        print "---用户管理测试初始化...---"
        cls.driver = webdriver.Firefox()
        driver = cls.driver
        driver.implicitly_wait(30)
        driver.maximize_window()
        driver.get(g.HOME)
        driver.find_element_by_name('username').clear()
        driver.find_element_by_name('username').send_keys(g.username)
        driver.find_element_by_name('password').clear()
        driver.find_element_by_name('password').send_keys(g.password)
        driver.find_element_by_link_text('登录').click()
        url = driver.current_url
        print "URL: ", url
        #cls.assertEqual(g.HOME_LOGINED,url 'URL checking failed')
        driver.find_element_by_id('45').click() # 进入组织管理
        driver.find_element_by_id('leftTree_1_a').click()
        driver.switch_to.frame('46')
        time.sleep(2)

    def test_add(self):
        # test user management
        print "---添加用户---"
        driver = self.driver
        driver.find_element_by_xpath(e.add).click()
        driver.find_element_by_id('account').send_keys('autotest1')
        driver.find_element_by_id('fullname').send_keys('Auto_test1')
        time.sleep(1)
        driver.find_element_by_xpath(e.back).click()
        time.sleep(1)

    def test_search(self):
        # test user management
        print "---查询用户---"
        driver = self.driver
        driver.find_element_by_xpath("//div[@class='drop']/a[contains(text(),'展开')]").click()
        driver.find_element_by_name('Q_fullname_SL').send_keys('Dyci')
        driver.find_element_by_id('btnSearch').click()
        result = driver.find_elements_by_xpath("//table[@id='sysUserItem']/tbody/tr")
        tbNum = len(result)
        if tbNum == 1 and (result[0].get_attribute('class') == 'empty'):
            print "查询结果为0"
        else:
            print "查询到 %d 个用户" % tbNum

        time.sleep(1)


    @classmethod
    def tearDownClass(cls):
        print "Finished and exit."
        time.sleep(4)
        cls.driver.quit()

if __name__ == "__main__":
    unittest.main(verbosity=2)








