# encoding: utf-8
import unittest
import time
from selenium import webdriver
from args import global_args, elements

g = global_args
e = elements


class ZfmsForm(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        # create a new firefox session
        print "---初始化及登录---"
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
        time.sleep(2)

    def test_form(self):
        print "---测试自定义表---"
        driver = self.driver
        driver.find_element_by_id('80').click()
        str_form = driver.find_element_by_id('leftTree_1_span').text
        print "Assert Text: ",str_form
        self.assertEqual(u'表单管理', str_form)

        # 添加表
        driver.find_element_by_id('leftTree_2_span').click()
        time.sleep(2)
        driver.switch_to.frame('83')
        driver.find_element_by_xpath(e.add).click()

        # 输入表信息
        driver.find_element_by_id('comment').send_keys('Test table1')
        tbname = driver.find_element_by_id('name')
        tbname.clear()
        tbname.send_keys('auto_test_table1')
        driver.find_element_by_xpath("//label[contains(text(),'主表')]/input").click()

        # 添加列
        print "添加字段..."
        i = 1
        while i <= g.fnum:
            fn=g.fname + str(i)
            driver.find_element_by_xpath("//div[@class='panel-toolbar']//a[@onclick='clickAddRow()']").click()
            driver.switch_to.parent_frame()
            pop_frame = driver.find_element_by_xpath("//div[@class='l-dialog-body']//iframe")
            driver.switch_to.frame(pop_frame)
            driver.find_element_by_id('fieldDesc').send_keys(g.fdesc)
            fieldName = driver.find_element_by_id('fieldName')
            fieldName.clear()
            fieldName.send_keys(fn)
            time.sleep(1)
            driver.find_element_by_id('dataFormSave').click()
            driver.find_element_by_xpath("//div[@class='panel-toolbar']//a[@onclick='dialog.close();']").click()
            driver.switch_to.parent_frame()
            driver.switch_to.frame('83')
            #print driver.find_element_by_id('tableColumnItem').get_attribute('class')
            newfield = driver.find_element_by_xpath("//table[@id='tableColumnItem']//td[@name='fieldName']").text
            print "New field name: ", newfield
            i = i + 1
            time.sleep(1)
        # Finised and refresh
        driver.get(g.HOME_LOGINED)

    def test_process(self):
        print "---测试流程定义---"
        driver = self.driver
        driver.find_element_by_id('80').click()
        str_process_def = driver.find_element_by_id('leftTree_12_span')
        print "Assert Text: ",str_process_def.text
        self.assertEqual(u'流程定义管理', str_process_def.text)

        str_process_def.click()
        time.sleep(2)




        #self.assertEqual(g.HOME_LOGINED, newfield, 'URL checking failed')


    @classmethod
    def tearDownClass(cls):

        print "Finished"
        time.sleep(4)
        cls.driver.quit()

# ------------------组织管理-----------------------


class ZfmsRole(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        # create a new firefox session
        print "---初始化及登录---"
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
        time.sleep(2)

    def test_user(self):
        # test user management
        print "---用户管理---"
        driver = self.driver
        driver.find_element_by_id('45').click()
        str_process_def = driver.find_element_by_id('leftTree_1_a').click()
        time.sleep(1)

    def test_role(self):
        # test user management
        print "---角色管理---"
        driver = self.driver
        driver.find_element_by_id('45').click()
        str_process_def = driver.find_element_by_id('leftTree_4_span').click()
        time.sleep(1)

    @classmethod
    def tearDownClass(cls):

        print "Finished"
        time.sleep(4)
        cls.driver.quit()

if __name__ == "__main__":
    unittest.main(verbosity=2)








