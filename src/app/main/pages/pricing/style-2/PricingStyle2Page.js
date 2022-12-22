import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { motion } from 'framer-motion';
import i18next from 'i18next';
import { ReqColorCodes } from 'app/auth/store/constants';

const Root = styled('div')(({ theme }) => ({
  '& .PricingStyle2Page-header': {
    height: 600,
    background: `linear-gradient(to right, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.main} 100%)`,
    color: theme.palette.primary.contrastText,
  },
  '& .PricingStyle2Page-badge': {
    backgroundColor: theme.palette.error.main,
    color: theme.palette.getContrastText(theme.palette.error.main),
  },
}));

function PricingStyle2Page() {
  const container = {
    show: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 100 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <Root className="w-full">
      <div className="PricingStyle2Page-header flex">
        <div className="p-24 w-full max-w-2xl mx-auto">
          <div className="text-center my-64 mx-24">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0, transition: { delay: 0.1 } }}
            >
              <Typography color="inherit" className="font-bold text-32 md:text-52">
                {i18next.t(`navigation:PRICINGPLAN`)}
              </Typography>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 0.3 } }}
            >
              <Typography color="inherit" className="text-16 opacity-75 mt-16 mx-auto max-w-512">
                {i18next.t(`navigation:PRICINGPLANTITLE`)}
              </Typography>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="-mt-288">
        <div className="w-full max-w-2xl mx-auto">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="flex items-center justify-center flex-wrap"
          >
            <motion.div variants={item} className="w-full max-w-320 sm:w-1/4 p-12">
              <Card className="relative rounded-16">
                <div className="pt-48 pb-24 text-center">
                  <Typography variant="subtitle1" color="inherit" className="text-20 font-semibold">
                    {i18next.t(`navigation:ULTRAPLAN`)}
                  </Typography>
                </div>

                <CardContent className="text-center p-0">
                  <div className="flex flex-col">
                    <div className="flex justify-center mb-8">
                      {/* <Typography variant="h5" color="textSecondary" className="font-semibold">
                        %
                      </Typography> */}
                      <Typography className="text-56 mx-4 tracking-tight font-semibold leading-none">
                        {i18next.t(`navigation:ULTRAPERCENT`)}%
                      </Typography>
                    </div>
                    <Typography color="textSecondary" className="font-medium text-12">
                      {i18next.t(`navigation:RETURNULTRA`)}
                    </Typography>
                  </div>

                  <div className="flex flex-col p-32">
                    {/* <Typography variant="subtitle1" className="mb-8">
                      <span className="font-semibold mx-4">10</span>
                      <span>{i18next.t(`navigation:RETURNULTRA`)}</span>
                    </Typography> */}
                    <Typography variant="subtitle1" className="mb-8">
                      {/* <span className="font-semibold mx-4">10</span> */}
                      {i18next.t(`navigation:Package1`)}
                    </Typography>
                    <Typography variant="subtitle1" className="mb-8">
                      {/* <span className="font-semibold mx-4">100</span> */}
                      {i18next.t(`navigation:Package2`)}
                    </Typography>
                    <Typography variant="subtitle1" className="mb-8">
                      {/* <span className="font-semibold mx-4">100</span> */}
                      {i18next.t(`navigation:Package3`)}
                    </Typography>
                    <Typography variant="subtitle1" className="">
                      <span className="font-semibold mx-4">{i18next.t(`navigation:MINULTRA1`)}</span>
                      {/* {i18next.t(`navigation:MINULTRA`)} */}
                    </Typography>
                    <Typography variant="subtitle1" className="mb-8">
                      <span className="font-semibold mx-4">{i18next.t(`navigation:MINULTRA2`)}</span>
                    </Typography>
                  </div>
                </CardContent>

                <div className="flex justify-center pb-32">
                  <Button
                    style={{
                      color: ReqColorCodes.btnText,
                      backgroundImage: ReqColorCodes.btn,
                    }}
                    variant="contained"
                    // color='secondary' 
                    className="w-128"
                  >
                    {i18next.t(`navigation:INVESTNOW`)}
                  </Button>
                </div>
              </Card>
            </motion.div>

            <motion.div variants={item} className="w-full max-w-320 sm:w-1/4 p-12">
              <Card className="relative rounded-16">
                <div className="pt-48 pb-24 text-center">
                  <Typography variant="subtitle1" color="inherit" className="text-20 font-semibold">
                    {i18next.t(`navigation:PLATINUMPLAN`)}
                  </Typography>
                </div>

                <CardContent className="text-center p-0">
                  <div className="flex flex-col">
                    <div className="flex justify-center mb-8">
                      {/* <Typography variant="h5" color="textSecondary" className="font-semibold">
                        %
                      </Typography> */}
                      <Typography className="text-56 mx-4 tracking-tight font-semibold leading-none">
                        {i18next.t(`navigation:PLATINUMPERCENT`)}%
                      </Typography>
                    </div>
                    <Typography color="textSecondary" className="font-medium text-12">
                      {i18next.t(`navigation:RETURNPLATINUM`)}
                    </Typography>
                  </div>

                  <div className="flex flex-col p-32">
                    {/* <Typography variant="subtitle1" className="mb-8">
                      <span className="font-semibold mx-4">10</span>
                      <span>{i18next.t(`navigation:RETURNULTRA`)}</span>
                    </Typography> */}
                    <Typography variant="subtitle1" className="mb-8">
                      {/* <span className="font-semibold mx-4">10</span> */}
                      {i18next.t(`navigation:Package1`)}
                    </Typography>
                    <Typography variant="subtitle1" className="mb-8">
                      {/* <span className="font-semibold mx-4">100</span> */}
                      {i18next.t(`navigation:Package2`)}
                    </Typography>
                    <Typography variant="subtitle1" className="mb-8">
                      {/* <span className="font-semibold mx-4">100</span> */}
                      {i18next.t(`navigation:Package3`)}
                    </Typography>
                    <Typography variant="subtitle1" className="">
                      <span className="font-semibold mx-4">{i18next.t(`navigation:MINPALTINUM1`)}</span>
                      {/* {i18next.t(`navigation:MINULTRA`)} */}
                    </Typography>
                    <Typography variant="subtitle1" className="mb-8">
                      <span className="font-semibold mx-4">{i18next.t(`navigation:MINPALTINUM2`)}</span>
                    </Typography>
                  </div>
                </CardContent>

                <div className="flex justify-center pb-32">
                  <Button
                    style={{
                      color: ReqColorCodes.btnText,
                      backgroundImage: ReqColorCodes.btn,
                    }}
                    variant="contained"
                    // color='secondary' 
                    className="w-128"
                  >
                    {i18next.t(`navigation:INVESTNOW`)}
                  </Button>
                </div>
              </Card>
            </motion.div>

            <motion.div variants={item} className="w-full max-w-320 sm:w-1/4 p-12">
              <Card className="relative rounded-16">
                <div className="pt-48 pb-24 text-center">
                  <Typography variant="subtitle1" color="inherit" className="text-20 font-semibold">
                    {i18next.t(`navigation:STANDARDPLAN`)}
                  </Typography>
                </div>

                <CardContent className="text-center p-0">
                  <div className="flex flex-col">
                    <div className="flex justify-center mb-8">
                      {/* <Typography variant="h5" color="textSecondary" className="font-semibold">
                        %
                      </Typography> */}
                      <Typography className="text-56 mx-4 tracking-tight font-semibold leading-none">
                        {i18next.t(`navigation:STANDARDPERCENT`)}%
                      </Typography>
                    </div>
                    <Typography color="textSecondary" className="font-medium text-12">
                      {i18next.t(`navigation:RETURNSTANDARD`)}
                    </Typography>
                  </div>

                  <div className="flex flex-col p-32">
                    {/* <Typography variant="subtitle1" className="mb-8">
                      <span className="font-semibold mx-4">10</span>
                      <span>{i18next.t(`navigation:RETURNULTRA`)}</span>
                    </Typography> */}
                    <Typography variant="subtitle1" className="mb-8">
                      {/* <span className="font-semibold mx-4">10</span> */}
                      {i18next.t(`navigation:Package1`)}
                    </Typography>
                    <Typography variant="subtitle1" className="mb-8">
                      {/* <span className="font-semibold mx-4">100</span> */}
                      {i18next.t(`navigation:Package2`)}
                    </Typography>
                    <Typography variant="subtitle1" className="mb-8">
                      {/* <span className="font-semibold mx-4">100</span> */}
                      {i18next.t(`navigation:Package3`)}
                    </Typography>
                    <Typography variant="subtitle1" className="">
                      <span className="font-semibold mx-4">{i18next.t(`navigation:MINSTANDARD1`)}</span>
                      {/* {i18next.t(`navigation:MINULTRA`)} */}
                    </Typography>
                    <Typography variant="subtitle1" className="mb-8">
                      <span className="font-semibold mx-4">{i18next.t(`navigation:MINSTANDARD2`)}</span>
                    </Typography>
                  </div>
                </CardContent>

                <div className="flex justify-center pb-32">
                  <Button
                    style={{
                      color: ReqColorCodes.btnText,
                      backgroundImage: ReqColorCodes.btn,
                    }}
                    variant="contained"
                    // color='secondary' 
                    className="w-128"
                  >
                    {i18next.t(`navigation:INVESTNOW`)}
                  </Button>
                </div>
              </Card>
            </motion.div>

            <motion.div variants={item} className="w-full max-w-320 sm:w-1/4 p-12">
              <Card className="relative rounded-16">
                <div className="pt-48 pb-24 text-center">
                  <Typography variant="subtitle1" color="inherit" className="text-20 font-semibold">
                    {i18next.t(`navigation:BEGINNERPLAN`)}
                  </Typography>
                </div>

                <CardContent className="text-center p-0">
                  <div className="flex flex-col">
                    <div className="flex justify-center mb-8">
                      {/* <Typography variant="h5" color="textSecondary" className="font-semibold">
                        %
                      </Typography> */}
                      <Typography className="text-56 mx-4 tracking-tight font-semibold leading-none">
                        {i18next.t(`navigation:BEGINNERPERCENT`)}%
                      </Typography>
                    </div>
                    <Typography color="textSecondary" className="font-medium text-12">
                      {i18next.t(`navigation:RETURNBEGINNER`)}
                    </Typography>
                  </div>

                  <div className="flex flex-col p-32">
                    {/* <Typography variant="subtitle1" className="mb-8">
                      <span className="font-semibold mx-4">10</span>
                      <span>{i18next.t(`navigation:RETURNULTRA`)}</span>
                    </Typography> */}
                    <Typography variant="subtitle1" className="mb-8">
                      {/* <span className="font-semibold mx-4">10</span> */}
                      {i18next.t(`navigation:Package1`)}
                    </Typography>
                    <Typography variant="subtitle1" className="mb-8">
                      {/* <span className="font-semibold mx-4">100</span> */}
                      {i18next.t(`navigation:Package2`)}
                    </Typography>
                    <Typography variant="subtitle1" className="mb-8">
                      {/* <span className="font-semibold mx-4">100</span> */}
                      {i18next.t(`navigation:Package3`)}
                    </Typography>
                    <Typography variant="subtitle1" className="">
                      <span className="font-semibold mx-4">{i18next.t(`navigation:MINBEGINNER1`)}</span>
                      {/* {i18next.t(`navigation:MINULTRA`)} */}
                    </Typography>
                    <Typography variant="subtitle1" className="mb-8">
                      <span className="font-semibold mx-4">{i18next.t(`navigation:MINBEGINNER2`)}</span>
                    </Typography>
                  </div>
                </CardContent>

                <div className="flex justify-center pb-32">
                  <Button
                    style={{
                      color: ReqColorCodes.btnText,
                      backgroundImage: ReqColorCodes.btn,
                    }}
                    variant="contained"
                    // color='secondary' 
                    className="w-128"
                  >
                    {i18next.t(`navigation:INVESTNOW`)}
                  </Button>
                </div>
              </Card>
            </motion.div>
          </motion.div>

          <div className="flex flex-col items-center py-96 text-center sm:ltr:text-left sm:rtl:text-right max-w-xl mx-auto">
            <Typography variant="h4" className="pb-32 font-medium">
              Frequently Asked Questions
            </Typography>

            <div className="flex flex-wrap w-full">
              <div className="w-full sm:w-1/2 p-24">
                <Typography className="text-20 mb-8">How does free trial work?</Typography>
                <Typography className="text-16" color="textSecondary">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur a diam nec
                  augue tincidunt accumsan. In dignissim laoreet ipsum eu interdum.
                </Typography>
              </div>

              <div className="w-full sm:w-1/2 p-24">
                <Typography className="text-20 mb-8">Can I cancel any time?</Typography>
                <Typography className="text-16" color="textSecondary">
                  Aliquam erat volutpat. Etiam luctus massa ex, at tempus tellus blandit quis. Sed
                  quis neque tellus. Donec maximus ipsum in malesuada hendrerit.
                </Typography>
              </div>

              <div className="w-full sm:w-1/2 p-24">
                <Typography className="text-20 mb-8">What happens after my trial ended?</Typography>
                <Typography className="text-16" color="textSecondary">
                  Aliquam erat volutpat. Etiam luctus massa ex, at tempus tellus blandit quis. Sed
                  quis neque tellus. Donec maximus ipsum in malesuada hendrerit.
                </Typography>
              </div>

              <div className="w-full sm:w-1/2 p-24">
                <Typography className="text-20 mb-8">Can I have a discount?</Typography>
                <Typography className="text-16" color="textSecondary">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur a diam nec
                  augue tincidunt accumsan. In dignissim laoreet ipsum eu interdum.
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Root>
  );
}

export default PricingStyle2Page;
