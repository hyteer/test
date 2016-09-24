# encoding: utf-8
import unittest
import xmlrunner

# ---- Solve Unicode error ----
import sys
reload(sys)
sys.setdefaultencoding('utf-8')
# ------------------------------

from Cases.form import table
from Cases.org import user


formTest = unittest.TestLoader().loadTestsFromTestCase(table.ZfmsForm)
orgTest = unittest.TestLoader().loadTestsFromTestCase(user.ZfmsOrg)

smokeTest = unittest.TestSuite([formTest, orgTest])

unittest.TextTestRunner(verbosity=2).run(smokeTest)

if __name__ == '__main__':
    unittest.main(
        testRunner=xmlrunner.XMLTestRunner(output='test-reports'),
        # these make sure that some options that are not applicable
        # remain hidden from the help menu.
        failfast=False, buffer=False, catchbreak=False)





