import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack'
import InnerWidth from '../layouts/inner-width';

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
  width: '100%',
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon color='primary' sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: theme.palette.background.default,
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, 0.1)',
  backgroundColor: '#292929'
}));



export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <InnerWidth>
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        sx={{
          mx: 'auto',
        }}
      >
        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
          <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
            <Typography>WordPressサイトは作ってないの？</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            Jamstackアーキテクチャを用いた、高速でセキュアなWordPressサイトを作ることも可能です。既存のWPサイトをリニューアルされたい場合にもこの方法はオススメです。詳しくはご相談ください。
            </Typography>
          </AccordionDetails>
        </Accordion>


        <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
          <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
            <Typography>Jamstackでサイトを作った場合、運用コスト（サーバ代など）はどのくらいかかるの？</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            小規模なサイトであれば、サーバ代は０円で運用可能です。その他の費用（ドメイン・利用されている各種ツールなど）は通常通りにかかります。
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
          <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
            <Typography>SEO対策もお願いできる？</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            SE-27では、全てのご依頼でGoogleの提唱するコアウェブバイタルや、ウェブ標準規格であるW3Cの勧告をできる限り満たすように実装しております。<br />こういった基本的な内部対策とは別に、より検索順位を上げるための施策（Google広告出稿やその他戦略）のご相談も別途お承りしておりますので、ご相談ください。
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
          <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
            <Typography>依頼から納品までの流れってどんな感じ？</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              こちらのリンクに詳しい制作フローをまとめておりますので、ご覧ください。
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
          <AccordionSummary aria-controls="panel5d-content" id="panel4d-header">
            <Typography>製作期間はどのくらい？</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            例えば、５ページ前後のコーポレートサイト・小規模なメディアサイトであれば、着手からリリースまで２週間程度が目安となります。デザインやその他要件のボリュームによってはもう少しお時間を頂くこともございます。
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
          <AccordionSummary aria-controls="panel6d-content" id="panel6d-header">
            <Typography>サイト納品後のサポートはある？</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            SE-27では安心かつ快適にサイトを運用頂けるよう、納品後も運用状態の監視やメンテナンスを永年無料で行っております。なお、デザインや機能の変更・修正・追加等はこのサポートに含まれませんので、別途ご相談ください。
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion expanded={expanded === 'panel7'} onChange={handleChange('panel7')}>
          <AccordionSummary aria-controls="panel7d-content" id="panel7d-header">
            <Typography>制作料金の相場感を教えて欲しい</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            基本的なデザインも込みの、ざっくりとした予算感です。ご参考までに。
            <ul>
              <li>ペライチ（1ページ構成）のLP、サービスサイトなど→15万円前後</li>
              <li>5ページ前後のコーポレートサイトなど→40～50万円</li>
              <li>ページ数の多いサイト・オウンドメディアなど→50万円～100万円</li>
            </ul>
            より安いWEB制作会社を探せばキリがありませんが、運用フェーズの快適性・維持コストの削減・リリース後のサポートを加味すると価値を感じて頂けるかと思います。
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion expanded={expanded === 'panel8'} onChange={handleChange('panel8')}>
          <AccordionSummary aria-controls="panel8d-content" id="panel8d-header">
            <Typography>デザインだけ・コーディングだけ依頼したい</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
            デザインのみ、コーディングのみのご依頼も歓迎しております。<br />制作会社様などで、デザイナー・コーダーをお探しの場合もご相談ください。実績や料金などをご共有致します。
            </Typography>
          </AccordionDetails>
        </Accordion>

      </Stack>
    </InnerWidth>
  );
}
