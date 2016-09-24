# encoding: utf-8
import unittest
import time
import xmlrunner
from selenium import webdriver
from args import global_args, elements

g = global_args
e = elements


class ZfmsForm(unittest.TestCase):
    @classmethod
    def setUpClass(cls):
        # 初始化：新建实例并进入自定义表菜单
        print "---自定义表测试初始化...---"
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
        driver.find_element_by_id('80').click()
        driver.find_element_by_id('leftTree_2_span').click()
        driver.switch_to.frame('83')
        time.sleep(2)

    def add_table(self):
        print "\n---添加自定义表---"
        driver = self.driver
        # 添加表
        driver.find_element_by_xpath(e.add).click()
        # 输入表信息
        driver.find_element_by_id('comment').send_keys(g.tbDesc)
        tbname = driver.find_element_by_id('name')
        tbname.clear()
        tbname.send_keys(g.tbName)
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
        driver.find_element_by_id('dataFormSave').click()
        driver.find_element_by_xpath("//div[@class='l-dialog-btn-inner' and text()='否']").click()
        # 判断操作结果
        # driver.find_element_by_xpath("//table[@id='bpmFormTableItem']/tbody/tr/td[contains(text(), 'auto_test_table')]")
        xpath = "//table[@id='bpmFormTableItem']/tbody/tr/td[contains(text(), '"+g.tbName+"')]"
        print "XPath: %s" % xpath
        nTb = driver.find_element_by_xpath("//table[@id='bpmFormTableItem']/tbody/tr/td[contains(text(), '"+g.tbName+"')]")
        print u"查找新添加的表： " + nTb.text
        try:
            driver.find_element_by_xpath("//table[@id='bpmFormTableItem']/tbody/tr/td[contains(text(), 'auto_test_table')]").is_displayed()

            a = True
        except:
            a = False
        if a is True:
            print "添加表成功！"
        elif a is False:
            print "未找到添加的表！"


    def search_table(self):
        print "---查询表---"
        driver = self.driver
        driver.find_element_by_xpath(e.unfold).click()
        driver.find_element_by_name('Q_tableName_SL').send_keys('test')
        driver.find_element_by_id('btnSearch').click()
        result = driver.find_elements_by_xpath("//table[@id='bpmFormTableItem']/tbody/tr")
        tbNum = len(result)
        if tbNum == 1 and (result[0].get_attribute('class') == 'empty'):
            print "查询结果为0"
        else:
            print "查询到 %d 个表" % tbNum

        time.sleep(2)


    def del_table(self):
        print "---删除表---"
        driver = self.driver
        nTb = driver.find_element_by_xpath("//table[@id='bpmFormTableItem']/tbody/tr/td[contains(text(), '"+g.tbName+"')]")
        nTb.click()
        driver.find_element_by_xpath(e.delete).click()
        driver.find_element_by_xpath(e.yes).click()
        time.sleep(1)
        driver.find_element_by_xpath(e.confirm).click()
        print "删除表成功！"
        time.sleep(2)


    def test_table_smoke(self):
        ZfmsForm.add_table(self)
        ZfmsForm.search_table(self)
        ZfmsForm.del_table(self)


    @classmethod
    def tearDownClass(cls):
        print "Finished"
        time.sleep(4)
        cls.driver.quit()



'''
if __name__ == "__main__":
    unittest.main(verbosity=2)
'''
'''
if __name__ == '__main__':
    unittest.main(
        testRunner=xmlrunner.XMLTestRunner(output='test-reports'),
        # these make sure that some options that are not applicable
        # remain hidden from the help menu.
        failfast=False, buffer=False, catchbreak=False)
        '''









