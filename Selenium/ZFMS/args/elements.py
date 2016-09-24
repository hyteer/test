# encoding: utf-8

###### 框架元素 ######
frame_form_table = "83"
frame_form_form = "86"
frame_form_search = "88"
frame_pop = "//div[@ligeruiid='Dialog1001']//iframe"

###### Common ######
# 添加
add = "//div[@class='panel-toolbar']//a/span/parent::a[contains(text(),'添加')]"
#add = "//div[@class='panel-toolbar']//a/span/parent::a[text()='添加')]"
# 删除
delete = "//div[@class='panel-toolbar']//a/span/parent::a[@action='delByTableId.ht' and contains(text(),'删除')]"
# 添加列
add_col = "//div[@class='panel-toolbar']//a[@onclick='clickAddRow()']"
# 关闭
close = "//div[@class='panel-toolbar']//a[@onclick='dialog.close();']"
# 返回
back = "//div[@class='panel-toolbar']//a/span/parent::a[contains(text(),'返回')]"
# 展开
unfold = "//div[@class='drop']/a[contains(text(),'展开')]"

# 确认-是l-dialog-btn-inner
yes = "//div[@class='l-dialog-btn-inner' and text()='是']"
no = "//div[@class='l-dialog-btn-inner' and text()='否']"
# 确定
confirm = "//div[@class='l-dialog-buttons-inner']//div[@class='l-dialog-btn-inner']"
# ----------表单----------
# 自定义表-保存
form_save = "dataFormSave"

# ----------登录 ---------
login_name = 'username'
login_pass = 'password'


# --------- 流程 ---------
process_main_id = '80'

# --------- 表单 ---------
table_main = "//label[contains(text(),'主表')]/input"
table_slave = "//label[contains(text(),'从表')]/input"








