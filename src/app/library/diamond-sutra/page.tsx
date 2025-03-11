'use client'

import { useState, useRef, useEffect } from 'react'
import { PauseCircleIcon, PlayCircleIcon } from '@heroicons/react/24/outline'
import { BookmarkIcon, BookOpenIcon, EyeSlashIcon, EyeIcon, ArrowsUpDownIcon } from '@heroicons/react/24/outline'
import { PauseIcon, PlayIcon } from '@heroicons/react/24/solid'
import useTranslation from '@/hooks/useTranslation'

const sutraContent = [
  { id: 'title', text: '金刚般若波罗蜜经' },
  { id: 'chapter1', text: '如是我闻：一时，佛在舍卫国祇树给孤独园，与大比丘众千二百五十人俱。尔时，世尊食时，著衣持钵，入舍卫大城乞食。于其城中，次第乞已，还至本处。饭食讫，收衣钵，洗足已，敷座而坐。' },
  { id: 'chapter2', text: '时，长老须菩提在大众中即从座起，偏袒右肩，右膝著地，合掌恭敬而白佛言："希有！世尊！如来善护念诸菩萨，善付嘱诸菩萨。世尊！善男子、善女人，发阿耨多罗三藐三菩提心，应云何住，云何降伏其心？"佛言："善哉，善哉。须菩提！如汝所说，如来善护念诸菩萨，善付嘱诸菩萨。汝今谛听！当为汝说：善男子、善女人，发阿耨多罗三藐三菩提心，应如是住，如是降伏其心。""唯然，世尊！愿乐欲闻。"' },
  { id: 'chapter3', text: '佛告须菩提："诸菩萨摩诃萨应如是降伏其心！所有一切众生之类：若卵生、若胎生、若湿生、若化生；若有色、若无色；若有想、若无想、若非有想非无想，我皆令入无余涅盘而灭度之。如是灭度无量无数无边众生，实无众生得灭度者。何以故？须菩提！若菩萨有我相、人相、众生相、寿者相，即非菩萨。"' },
  { id: 'chapter4', text: '"复次，须菩提！菩萨于法，应无所住，行于布施，所谓不住色布施，不住声香味触法布施。须菩提！菩萨应如是布施，不住于相。何以故？若菩萨不住相布施，其福德不可思量。"' },
  { id: 'chapter5', text: '"须菩提！于意云何？东方虚空可思量不？""不也，世尊！""须菩提！南西北方四维上下虚空可思量不？""不也，世尊！""须菩提！菩萨无住相布施，福德亦复如是不可思量。须菩提！菩萨但应如所教住。"' },
  { id: 'chapter6', text: '"须菩提！于意云何？可以身相见如来不？""不也，世尊！不可以身相得见如来。何以故？如来所说身相，即非身相。"佛告须菩提："凡所有相，皆是虚妄。若见诸相非相，即见如来。"' },
  { id: 'chapter7', text: '须菩提白佛言："世尊！颇有众生，得闻如是言说章句，生实信不？"佛告须菩提："莫作是说。如来灭后，后五百岁，有持戒修福者，于此章句能生信心，以此为实，当知是人不于一佛二佛三四五佛而种善根，已于无量千万佛所种诸善根，闻是章句，乃至一念生净信者，须菩提！如来悉知悉见，是诸众生得如是无量福德。"' },
  { id: 'chapter8', text: '"何以故？是诸众生无复我相、人相、众生相、寿者相，无法相，亦无非法相。何以故？是诸众生若心取相，则为著我人众生寿者。若取法相，即著我人众生寿者。何以故？若取非法相，即著我人众生寿者，是故不应取法，不应取非法。以是义故，如来常说：汝等比丘，知我说法，如筏喻者；法尚应舍，何况非法。"' },
  { id: 'chapter9', text: '"须菩提！于意云何？须陀洹能作是念：我得须陀洹果不？"须菩提言："不也，世尊！何以故？须陀洹名为入流，而无所入，不入色声香味触法，是名须陀洹。"' },
  { id: 'chapter10', text: '"须菩提！于意云何？斯陀含能作是念：我得斯陀含果不？"须菩提言："不也，世尊！何以故？斯陀含名一往来，而实无往来，是名斯陀含。"' },
  { id: 'chapter11', text: '"须菩提！于意云何？阿那含能作是念：我得阿那含果不？"须菩提言："不也，世尊！何以故？阿那含名为不来，而实无不来，是故名阿那含。"' },
  { id: 'chapter12', text: '"须菩提！于意云何？阿罗汉能作是念：我得阿罗汉道不？"须菩提言："不也，世尊！何以故？实无有法名阿罗汉。世尊！若阿罗汉作是念：我得阿罗汉道，即为著我人众生寿者。世尊！佛说我得无诤三昧，人中最为第一，是第一离欲阿罗汉。我不作是念：我是离欲阿罗汉。世尊！我若作是念：我得阿罗汉道，世尊则不说须菩提是乐阿兰那行者！以须菩提实无所行，而名须菩提是乐阿兰那行。"' },
  { id: 'chapter13', text: '佛告须菩提："于意云何？如来昔在然灯佛所，于法有所得不？""不也，世尊！如来在然灯佛所，于法实无所得。"' },
  { id: 'chapter14', text: '佛告须菩提："菩萨应如是生清净心，不应住色生心，不应住声香味触法生心，应无所住而生其心。须菩提！譬如有人，身如须弥山王，于意云何？是身为大不？"须菩提言："甚大，世尊！何以故？佛说非身，是名大身。"' },
  { id: 'chapter15', text: '"须菩提！如恒河中所有沙数，如是沙等恒河，于意云何？是诸恒河沙宁为多不？"须菩提言："甚多，世尊！但诸恒河尚多无数，何况其沙。""须菩提！我今实言告汝：若有善男子、善女人，以七宝满尔所恒河沙数三千大千世界，以用布施，得福多不？"须菩提言："甚多，世尊！"佛告须菩提："若善男子、善女人，于此经中，乃至受持四句偈等，为他人说，其福胜彼。"' },
  { id: 'chapter16', text: '"复次，须菩提！随说是经，乃至四句偈等，当知此处，一切世间、天、人、阿修罗，皆应供养，如佛塔庙，何况有人尽能受持读诵。须菩提！当知是人成就最上第一希有之法，若是经典所在之处，则为有佛，若尊重弟子。"' },
  { id: 'chapter17', text: '尔时，须菩提白佛言："世尊！当何名此经，我等云何奉持？"佛告须菩提："是经名为《金刚般若波罗蜜》，以是名字，汝当奉持。所以者何？须菩提！佛说般若波罗蜜，即非般若波罗蜜，是名般若波罗蜜。"' },
  { id: 'chapter18', text: '"须菩提！于意云何？如来有肉眼不？""如是，世尊！如来有肉眼。""须菩提！于意云何？如来有天眼不？""如是，世尊！如来有天眼。""须菩提！于意云何？如来有慧眼不？""如是，世尊！如来有慧眼。""须菩提！于意云何？如来有法眼不？""如是，世尊！如来有法眼。""须菩提！于意云何？如来有佛眼不？""如是，世尊！如来有佛眼。"' },
  { id: 'chapter19', text: '"须菩提！于意云何？如来有见三千大千世界所有微尘不？""如是，世尊！如来见三千大千世界所有微尘。何以故？如来说微尘，即非微尘，是名微尘。如来说三千大千世界，即非三千大千世界，是名三千大千世界。"' },
  { id: 'chapter20', text: '"须菩提！于意云何？可以三十二相见如来不？""不也，世尊！不可以三十二相得见如来。何以故？如来说三十二相，即是非相，是名三十二相。"' },
  { id: 'chapter21', text: '"须菩提！汝勿谓如来作是念：我当有所说法。莫作是念，何以故？若人言如来有所说法，即为谤佛，不能解我所说故。须菩提！说法者，无法可说，是名说法。"' },
  { id: 'chapter22', text: '尔时，慧命须菩提白佛言："世尊！颇有众生，于未来世，闻说是法，生信心不？"佛言："须菩提！彼非众生，非不众生。何以故？须菩提！众生众生者，如来说非众生，是名众生。"' },
  { id: 'chapter23', text: '"须菩提！若菩萨作是言：我当庄严佛土，是不名菩萨。何以故？如来说庄严佛土者，即非庄严，是名庄严。须菩提！若菩萨通达无我法者，如来说名真是菩萨。"' },
  { id: 'chapter24', text: '"须菩提！若有人以满三千大千世界七宝持用布施，若有善男子、善女人发菩萨心者，持于此经，乃至四句偈等，受持读诵，为人演说，其福胜彼。云何为人演说？不取于相，如如不动。何以故？一切有为法，如梦幻泡影，如露亦如电，应作如是观。"' },
  { id: 'chapter25', text: '佛告须菩提："于意云何？汝等勿谓如来作是念：我当度众生。须菩提！莫作是念。何以故？实无有众生如来度者。若有众生如来度者，如来则有我人众生寿者。须菩提！如来说有我者，则非有我，而凡夫之人以为有我。须菩提！凡夫者，如来说则非凡夫，是名凡夫。"' },
  { id: 'chapter26', text: '"须菩提！于意云何？可以三十二相观如来不？"须菩提言："如是！如是！以三十二相观如来。"佛言："须菩提！若以三十二相观如来者，转轮圣王则是如来。"须菩提白佛言："世尊！如我解佛所说义，不应以三十二相观如来。"' },
  { id: 'chapter27', text: '"须菩提！汝若作是念：如来不以具足相故，得阿耨多罗三藐三菩提。须菩提！莫作是念：如来不以具足相故，得阿耨多罗三藐三菩提。须菩提！汝若作是念，发阿耨多罗三藐三菩提心者，说诸法断灭。莫作是念！何以故？发阿耨多罗三藐三菩提心者，于法不说断灭相。"' },
  { id: 'chapter28', text: '"须菩提！若菩萨以满恒河沙等世界七宝布施；若复有人知一切法无我，得成于忍，此菩萨胜前菩萨所得功德。须菩提！以诸菩萨不受福德故。"须菩提白佛言："世尊！云何菩萨不受福德？""须菩提！菩萨所作福德，不应贪著，是故说不受福德。"' },
  { id: 'chapter29', text: '"须菩提！若有人言：如来若来若去、若坐若卧，是人不解我所说义。何以故？如来者，无所从来，亦无所去，故名如来。"' },
  { id: 'chapter30', text: '"须菩提！若善男子、善女人，以三千大千世界碎为微尘，于意云何？是微尘众宁为多不？""甚多，世尊！""须菩提！是微尘众，如来说非微尘众，是名微尘众。如来说世界，非世界，是名世界。"' },
  { id: 'chapter31', text: '"须菩提！若人言：佛说我见、人见、众生见、寿者见。须菩提！于意云何？是人解我所说义不？""不也，世尊！是人不解如来所说义。何以故？世尊说我见、人见、众生见、寿者见，即非我见、人见、众生见、寿者见，是名我见、人见、众生见、寿者见。"' },
  { id: 'chapter32', text: '"须菩提！发阿耨多罗三藐三菩提心者，于一切法，应如是知，如是见，如是信解，不生法相。须菩提！所言法相者，如来说即非法相，是名法相。"' }
]

const menuItems = [
  { id: 'chapter1', text: '法会因由分' },
  { id: 'chapter2', text: '善现启请分' },
  { id: 'chapter3', text: '大乘正宗分' },
  { id: 'chapter4', text: '妙行无住分' },
  { id: 'chapter5', text: '如理实见分' },
  { id: 'chapter6', text: '正信希有分' },
  { id: 'chapter7', text: '无得无说分' },
  { id: 'chapter8', text: '依法出生分' },
  { id: 'chapter9', text: '一相无相分' },
  { id: 'chapter10', text: '庄严净土分' },
  { id: 'chapter11', text: '无为福胜分' },
  { id: 'chapter12', text: '尊重正教分' },
  { id: 'chapter13', text: '如法受持分' },
  { id: 'chapter14', text: '离相寂灭分' },
  { id: 'chapter15', text: '持经功德分' },
  { id: 'chapter16', text: '能净业障分' },
  { id: 'chapter17', text: '究竟无我分' },
  { id: 'chapter18', text: '一体同观分' },
  { id: 'chapter19', text: '法界通化分' },
  { id: 'chapter20', text: '离色离相分' },
  { id: 'chapter21', text: '非说所说分' },
  { id: 'chapter22', text: '无法可得分' },
  { id: 'chapter23', text: '净心行善分' },
  { id: 'chapter24', text: '福智无比分' },
  { id: 'chapter25', text: '化无所化分' },
  { id: 'chapter26', text: '法身非相分' },
  { id: 'chapter27', text: '无断无灭分' },
  { id: 'chapter28', text: '不受不贪分' },
  { id: 'chapter29', text: '威仪寂静分' },
  { id: 'chapter30', text: '一合理相分' },
  { id: 'chapter31', text: '知见不生分' },
  { id: 'chapter32', text: '应化非真分' }
]

const explanations = [
  {
    id: 'chapter1',
    title: '法会因由分',
    content: '这一品介绍了说法的时间、地点、听众等因缘。佛陀在舍卫国的祇树给孤独园，与一千二百五十位大比丘在一起。当时佛陀在午饭时分，穿好衣服，拿着钵，进入舍卫城乞食。乞食完毕后，回到住处用餐，然后收拾衣钵，洗净双足，铺设座位安坐。'
  },
  {
    id: 'chapter2',
    title: '善现启请分',
    content: '这一品记载了须菩提尊者向佛陀请法的过程。须菩提赞叹佛陀善于护念和付嘱诸菩萨，并请问发心修行大乘的人应当如何安住其心、如何降伏妄念。佛陀对须菩提的请问表示赞许，并答应为他详细解说。'
  },
  {
    id: 'chapter3',
    title: '大乘正宗分',
    content: '这一品阐述了菩萨修行的根本法门。佛陀开示说，菩萨应当度化一切众生入涅槃，但不能执著于度化众生的相。若有我相、人相、众生相、寿者相，就不是真正的菩萨。这揭示了大乘佛法的核心——无相般若智慧。'
  },
  {
    id: 'chapter4',
    title: '妙行无住分',
    content: '这一品讲述了菩萨修行的重要原则：无住布施。菩萨行布施时，不应执著于任何相，包括色、声、香、味、触、法等六尘。这种不住相的布施，其功德不可思量。'
  },
  {
    id: 'chapter5',
    title: '如理实见分',
    content: '这一品通过虚空的比喻，说明菩萨无住相布施的福德不可思量。就像十方虚空无法测量一样，菩萨的无相布施功德也是无法衡量的。'
  },
  {
    id: 'chapter6',
    title: '正信希有分',
    content: '这一品强调不能执著于如来的身相。佛陀告诉须菩提，不能通过身相来见如来，因为一切相都是虚妄的。只有见到诸相非相，才能真正见到如来。'
  },
  {
    id: 'chapter7',
    title: '无得无说分',
    content: '这一品讲述了对《金刚经》生起信心的殊胜功德。佛陀说，在末法时期，若有人能对此经生起信心，说明此人已在无量佛所种下善根。'
  },
  {
    id: 'chapter8',
    title: '依法出生分',
    content: '这一品进一步阐述了不执著于相的重要性。佛陀告诫众生不要执著于我相、人相、众生相、寿者相，也不要执著于法相和非法相。佛法如同渡河的船筏，到达彼岸后应当舍弃。'
  },
  {
    id: 'chapter9',
    title: '一相无相分',
    content: '这一品通过须陀洹（初果）的例子，说明即使证得圣果，也不应执著于所证得的果位。须陀洹虽名为"入流"，但实际上并无所入，这才是真正的须陀洹。'
  },
  {
    id: 'chapter10',
    title: '庄严净土分',
    content: '这一品以斯陀含（二果）为例，继续阐述不执著的道理。斯陀含虽名为"一往来"，但实际上并无往来可得，这样的无执著才是真正的斯陀含。'
  },
  {
    id: 'chapter11',
    title: '无为福胜分',
    content: '这一品借阿那含（三果）的例子，进一步说明无执著的重要性。阿那含虽名为"不来"，但实际上并无不来可得，这才是真正的阿那含。'
  },
  {
    id: 'chapter12',
    title: '尊重正教分',
    content: '这一品以阿罗汉（四果）为例，强调即使是最高果位，也不应执著。须菩提以自身为例，说明虽然他是"无诤三昧"第一，但从不认为自己是阿罗汉，这种无执著的态度才是真正的修行。'
  },
  {
    id: 'chapter13',
    title: '如法受持分',
    content: '这一品通过佛陀在然灯佛处求法的公案，说明即使是佛陀本人，在修行过程中也是无所得的。这种无所得的态度，正是般若波罗蜜多的精髓。'
  },
  {
    id: 'chapter14',
    title: '离相寂灭分',
    content: '这一品讲述了菩萨应当如何生起清净心。佛陀教导说，不应住于色、声、香、味、触、法等任何相而生心，而应当无所住而生其心。通过须弥山王的比喻，说明真正的"大"不在于外相。'
  },
  {
    id: 'chapter15',
    title: '持经功德分',
    content: '这一品通过恒河沙的比喻，说明受持《金刚经》的功德。即使以七宝布施充满恒河沙数的三千大千世界，其功德也不如受持《金刚经》四句偈并为他人演说。'
  },
  {
    id: 'chapter16',
    title: '能净业障分',
    content: '这一品强调《金刚经》所在之处，应当如同佛塔庙一般受到供养。若有人能完全受持读诵此经，则成就最上第一希有之法。此经所在之处，即为有佛。'
  },
  {
    id: 'chapter17',
    title: '究竟无我分',
    content: '这一品解释了经名的含义。《金刚般若波罗蜜》这个名字本身也是不可执著的，因为佛说的般若波罗蜜，即非般若波罗蜜，这才是真正的般若波罗蜜。'
  },
  {
    id: 'chapter18',
    title: '一体同观分',
    content: '这一品通过讨论如来的五眼（肉眼、天眼、慧眼、法眼、佛眼），说明佛陀具备圆满的智慧，能够从不同层面观察宇宙人生的真相。'
  },
  {
    id: 'chapter19',
    title: '法界通化分',
    content: '这一品通过微尘与世界的比喻，说明一切现象的本质。如来所说的微尘并非实有的微尘，三千大千世界也非实有的世界，这是在阐述诸法实相的道理。'
  },
  {
    id: 'chapter20',
    title: '离色离相分',
    content: '这一品强调不能执著于如来的三十二相。虽然如来具有三十二相，但这些相都是非相，不应执著于这些外在的形相。'
  },
  {
    id: 'chapter21',
    title: '非说所说分',
    content: '这一品指出如来并没有执著于说法这件事。说法者无法可说，这才是真正的说法。这是在破除对说法的执著。'
  },
  {
    id: 'chapter22',
    title: '无法可得分',
    content: '这一品回答了未来众生是否能对此经生起信心的问题。通过说明众生的本质，指出所谓众生也是非众生，破除对众生相的执著。'
  },
  {
    id: 'chapter23',
    title: '净心行善分',
    content: '这一品讲述了真正的菩萨行。若执著于庄严佛土，就不是真正的菩萨。只有通达无我法的菩萨，才是如来所说的真实菩萨。'
  },
  {
    id: 'chapter24',
    title: '福智无比分',
    content: '这一品通过对比七宝布施与受持经典的功德，说明般若智慧的殊胜。同时指出一切有为法如梦幻泡影，应当以无住的智慧来观照一切现象。'
  },
  {
    id: 'chapter25',
    title: '化无所化分',
    content: '这一品指出如来并没有"我度众生"的念头。若执著于度化众生，就会落入我相、人相、众生相、寿者相。真正的度化是无所度化。'
  },
  {
    id: 'chapter26',
    title: '法身非相分',
    content: '这一品再次强调不能执著于如来的三十二相。须菩提最初误解了佛意，后来领悟到不应以三十二相来观察如来，体现了对法的更深层理解。'
  },
  {
    id: 'chapter27',
    title: '无断无灭分',
    content: '这一品说明不应认为如来是以具足相而成就无上正等正觉，也不应认为发菩提心的人会执著于诸法断灭。这是在遮遣两种极端见解。'
  },
  {
    id: 'chapter28',
    title: '不受不贪分',
    content: '这一品对比了两种布施：以七宝布施与通达无我法。后者的功德更为殊胜，因为真正的菩萨不执著于福德，不贪著于所作功德。'
  },
  {
    id: 'chapter29',
    title: '威仪寂静分',
    content: '这一品说明如来的真实义。如来没有来去坐卧等相，这些都是世俗的认知。如来的本质是不生不灭，超越一切相对的概念。'
  },
  {
    id: 'chapter30',
    title: '一合理相分',
    content: '这一品通过微尘与世界的比喻，再次阐述诸法实相的道理。所谓的微尘众和世界都是假名，不应执著于这些概念。'
  },
  {
    id: 'chapter31',
    title: '知见不生分',
    content: '这一品指出四相（我见、人见、众生见、寿者见）的虚妄性。真正的见解是不执著于这些见解，这才是真正的见解。'
  },
  {
    id: 'chapter32',
    title: '应化非真分',
    content: '这一品是全经的总结，说明发菩提心的人应当如何认知、观察和理解一切法。不执著于法相，才是真正的法相。'
  }
]

const DiamondSutraPage = () => {
  const [showExplanation, setShowExplanation] = useState(true)
  const [fontSize, setFontSize] = useState('text-lg')
  const [isVertical, setIsVertical] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const [currentTime, setCurrentTime] = useState('00:00')
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [duration, setDuration] = useState('00:00')
  const contentRef = useRef<HTMLDivElement>(null)
  const [currentExplanation, setCurrentExplanation] = useState<string>('chapter1')
  const [highlightedId, setHighlightedId] = useState<string | null>(null)

  useEffect(() => {
    audioRef.current = new Audio('/audio/jingshu/jingangjing.mp3')
    
    audioRef.current.addEventListener('timeupdate', updateProgress)
    audioRef.current.addEventListener('ended', handleAudioEnd)
    audioRef.current.addEventListener('loadedmetadata', () => {
      if (audioRef.current) {
        const minutes = Math.floor(audioRef.current.duration / 60)
        const seconds = Math.floor(audioRef.current.duration % 60)
        setDuration(`${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`)
      }
    })
    
    return () => {
      if (audioRef.current) {
        audioRef.current.removeEventListener('timeupdate', updateProgress)
        audioRef.current.removeEventListener('ended', handleAudioEnd)
        audioRef.current.removeEventListener('loadedmetadata', () => {})
        audioRef.current.pause()
      }
    }
  }, [])

  const updateProgress = () => {
    if (audioRef.current) {
      const currentProgress = (audioRef.current.currentTime / audioRef.current.duration) * 100
      setProgress(currentProgress)
      
      const minutes = Math.floor(audioRef.current.currentTime / 60)
      const seconds = Math.floor(audioRef.current.currentTime % 60)
      setCurrentTime(`${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`)
    }
  }

  const handleAudioEnd = () => {
    setIsPlaying(false)
    setProgress(0)
    setCurrentTime('00:00')
  }

  const handlePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (audioRef.current) {
      const progressBar = e.currentTarget
      const clickPosition = e.clientX - progressBar.getBoundingClientRect().left
      const progressBarWidth = progressBar.offsetWidth
      const newProgress = (clickPosition / progressBarWidth) * 100
      const newTime = (audioRef.current.duration * newProgress) / 100
      
      audioRef.current.currentTime = newTime
      setProgress(newProgress)
    }
  }

  const scrollToSection = (id: string) => {
    if (contentRef.current) {
      const element = document.getElementById(id)
      if (element) {
        const container = contentRef.current
        const elementPosition = element.offsetTop
        container.scrollTo({
          top: elementPosition - container.offsetTop - 20,
          behavior: 'smooth'
        })
        setCurrentExplanation(id)
        setHighlightedId(id)
        
        setTimeout(() => {
          setHighlightedId(null)
        }, 3000)
      }
    }
  }

  useEffect(() => {
    const container = contentRef.current
    if (!container) return

    const handleScroll = () => {
      const paragraphs = container.getElementsByTagName('p')
      for (let i = 0; i < paragraphs.length; i++) {
        const paragraph = paragraphs[i]
        const rect = paragraph.getBoundingClientRect()
        const containerRect = container.getBoundingClientRect()
        
        if (rect.top >= containerRect.top && rect.top <= containerRect.bottom) {
          const id = paragraph.id
          if (id && id !== 'title') {
            setCurrentExplanation(id)
          }
          break
        }
      }
    }

    container.addEventListener('scroll', handleScroll)
    return () => container.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-bg-cream via-light-gold/5 to-bg-cream">
      <div className="absolute inset-0 bg-[url('/images/patterns/lotus-pattern-light.png')] opacity-5 pointer-events-none" />
      
      {/* 页面头部 */}
      <header className="relative px-8 py-6 border-b border-primary-gold/20">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold font-song text-dark-brown">《金刚般若波罗蜜经》</h1>
          <p className="text-base text-gray-600 mb-4">
            &ldquo;如是我闻，一时佛在舍卫国祇树给孤独园&rdquo;
          </p>
          
          {/* 音频控件 */}
          <div className="mt-4 flex items-center gap-4 max-w-2xl">
            <button
              onClick={handlePlayPause}
              className="text-primary-gold hover:text-deep-gold transition-colors"
            >
              {isPlaying ? (
                <PauseCircleIcon className="w-12 h-12" />
              ) : (
                <PlayCircleIcon className="w-12 h-12" />
              )}
            </button>
            
            {/* 进度条 */}
            <div 
              className="flex-1 h-2 bg-gray-200 rounded-full cursor-pointer"
              onClick={handleProgressClick}
            >
              <div 
                className="h-full bg-primary-gold rounded-full transition-all duration-100"
                style={{ width: `${progress}%` }}
              />
            </div>
            
            <span className="text-sm text-dark-brown whitespace-nowrap">
              {currentTime} / {duration}
            </span>
          </div>
        </div>
      </header>

      <main className="relative px-8 py-6">
        <div className="max-w-7xl mx-auto grid grid-cols-12 gap-8">
          {/* 左侧导航 */}
          <aside className="col-span-3 space-y-6">
            <div className="bg-white/80 backdrop-blur-md rounded-xl p-4 shadow-sm border border-primary-gold/20">
              <h2 className="text-lg font-bold text-dark-brown mb-4">经文目录</h2>
              <nav className="space-y-2 max-h-[calc(100vh-32rem)] overflow-y-auto scrollbar-thin scrollbar-thumb-primary-gold/40 hover:scrollbar-thumb-primary-gold/60">
                {menuItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="w-full text-left px-3 py-2 rounded-lg hover:bg-light-gold/50 text-dark-brown
                             transition-colors flex items-center space-x-2"
                  >
                    <div className="w-2 h-2 rounded-full bg-primary-gold/60" />
                    <span>{item.text}</span>
                  </button>
                ))}
              </nav>
            </div>

            <div className="bg-white/80 backdrop-blur-md rounded-xl p-4 shadow-sm border border-primary-gold/20">
              <h2 className="text-lg font-bold text-dark-brown mb-4">相关资料</h2>
              <nav className="space-y-2">
                <a href="#" className="block px-3 py-2 rounded-lg hover:bg-light-gold/50 text-dark-brown transition-colors">
                  📚 金刚经的历史、版本、各宗派解读
                </a>
                <a href="#" className="block px-3 py-2 rounded-lg hover:bg-light-gold/50 text-dark-brown transition-colors">
                  🔗 《心经》
                </a>
                <a href="#" className="block px-3 py-2 rounded-lg hover:bg-light-gold/50 text-dark-brown transition-colors">
                  🔗 《大般若经》
                </a>
              </nav>
            </div>
          </aside>

          {/* 中间经文 */}
          <div className="col-span-6">
            <div className="bg-white/90 backdrop-blur-md rounded-xl p-6 shadow-sm border border-primary-gold/20">
              <div className="flex justify-between items-center mb-4">
                <div className="space-x-2">
                  <button
                    onClick={() => setFontSize('text-base')}
                    className={`px-3 py-1 rounded ${fontSize === 'text-base' ? 'bg-primary-gold/20' : 'hover:bg-primary-gold/10'}`}
                  >
                    小
                  </button>
                  <button
                    onClick={() => setFontSize('text-lg')}
                    className={`px-3 py-1 rounded ${fontSize === 'text-lg' ? 'bg-primary-gold/20' : 'hover:bg-primary-gold/10'}`}
                  >
                    中
                  </button>
                  <button
                    onClick={() => setFontSize('text-xl')}
                    className={`px-3 py-1 rounded ${fontSize === 'text-xl' ? 'bg-primary-gold/20' : 'hover:bg-primary-gold/10'}`}
                  >
                    大
                  </button>
                </div>
                <button
                  onClick={() => setIsVertical(!isVertical)}
                  className="px-3 py-1 rounded hover:bg-primary-gold/10"
                >
                  {isVertical ? '横排' : '竖排'}
                </button>
              </div>
              <div 
                ref={contentRef}
                className={`${fontSize} font-song text-dark-brown leading-loose overflow-y-auto max-h-[600px] ${
                  isVertical ? 'writing-vertical-rl h-[600px]' : ''
                }`}
              >
                {sutraContent.map((section) => (
                  <section
                    key={section.id}
                    id={section.id}
                    className="scroll-mt-8"
                  >
                    <h3 className="text-lg font-kai font-bold text-burgundy mb-4">
                      {menuItems.find(item => item.id === section.id)?.text}
                    </h3>
                    <p className={`mb-4 indent-8 scroll-mt-4 transition-all duration-300 rounded-lg ${
                      highlightedId === section.id 
                        ? 'bg-primary-gold/10 -mx-4 px-4' 
                        : ''
                    }`}>
                      {section.text}
                    </p>
                  </section>
                ))}
              </div>
            </div>
          </div>

          {/* 右侧释义 */}
          <aside className="col-span-3">
            {showExplanation ? (
              <div className="bg-white/80 backdrop-blur-md rounded-xl p-4 shadow-sm border border-primary-gold/20">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-lg font-bold text-dark-brown">经文释义</h2>
                  <button
                    onClick={() => setShowExplanation(false)}
                    className="text-sm text-gray-500 hover:text-dark-brown transition-colors"
                  >
                    隐藏释义
                  </button>
                </div>
                <div className="space-y-4 h-[600px] overflow-y-auto scrollbar-thin scrollbar-thumb-primary-gold/40 hover:scrollbar-thumb-primary-gold/60">
                  {explanations.map((explanation) => (
                    <div 
                      key={explanation.id}
                      className={`p-4 rounded-lg transition-all duration-300 ${
                        currentExplanation === explanation.id 
                          ? 'bg-light-gold/50 shadow-sm' 
                          : 'bg-light-gold/20 hover:bg-light-gold/30'
                      }`}
                    >
                      <h3 className="font-bold mb-2 text-burgundy">{explanation.title}</h3>
                      <p className="text-sm text-gray-700 leading-relaxed">
                        {explanation.content}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <button
                onClick={() => setShowExplanation(true)}
                className="w-full bg-white/80 backdrop-blur-md rounded-xl p-4 shadow-sm border border-primary-gold/20 
                         hover:bg-white/90 transition-all duration-300 text-left group"
              >
                <div className="flex items-center space-x-2">
                  <span className="font-kai text-lg text-dark-brown">展开释义</span>
                </div>
              </button>
            )}
          </aside>
        </div>
      </main>
    </div>
  )
}

export default DiamondSutraPage