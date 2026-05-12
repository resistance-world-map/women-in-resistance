
(function(){
  const translations = {
    en: {
      /* toolbar */
      'toolbar.language':'Language',
      'toolbar.listen':'Listen to page',
      'toolbar.mapdesc':'Hear map description',
      'toolbar.stop':'Stop audio',
      /* status */
      'status.listening':'Audio started.',
      'status.stopped':'Audio stopped.',
      'status.lang.en':'Language set to English.',
      'status.lang.fr':'Langue changée en français.',
      'status.lang.ar':'تم تغيير اللغة إلى العربية.',
      /* home */
      'home.eyebrow':'Interactive history project',
      'home.title':'Women in Resistance: A World Map of Overlooked Stories',
      'home.intro':'Explore two countries where women contributed to resistance movements, sustained homes and communities during conflict, and then faced long struggles for recognition after independence.',
      'home.mapHeading':'Click a highlighted country',
      'home.mapText':'Each location opens a short story page focused on the role of women in various resistance movements.',
      'home.legend':'Story location',
      'home.mapLongdesc':'The map highlights Algeria in North Africa and Kenya in East Africa. Each highlighted country can be selected by keyboard or mouse to open its story page.',
      'cards.algeria.kicker':'Algeria',
      'cards.algeria.title':'Forgotten women in the anti-colonial struggle',
      'cards.algeria.text':'Women carried messages, transported weapons and acted as spies in the fight for independence. Their bravery made them subject to gender violence at the hands of the French colonisers, and their stories have been pushed aside in the post-independence era.',
      'cards.kenya.kicker':'Kenya',
      'cards.kenya.title':'Women who kept resistance alive.',
      'cards.kenya.text':'Kenyan women helped to organise the Mau Mau rebels, overseeing logistics and oath-taking. They were active in combat roles too, although the extent of their involvement was hidden for decades.',
      'home.listHeading':'Stories by country',
      'home.listText':'You can use this text list instead of the map. It offers the same destinations in a screen-reader-friendly format.',
      'home.listAlgeria':'Algeria — women in the anti-colonial struggle',
      'home.listKenya':'Kenya — women who kept resistance alive',
      'home.contact.prompt':'Do you have a story to share?',
      'home.contact.btn':'Contact Us',
      /* shared */
      'story.back':'← Back to world map',
      'story.calloutLabel':'Why this story matters:',
      /* algeria */
      'story.algeria.country':'Algeria',
      'story.algeria.title':'Women in the anti-colonial struggle',
      'story.algeria.h1':'What was the Algerian War?',
      'story.algeria.p1':'The Algerian War was a violent war between the National Liberation Front (FLN) and French colonial rule, in the fight for Algeria\'s independence. It lasted 8 years from 1954–1962 and ended with Algeria gaining independence. The FLN used guerrilla tactics, which are small-scale, unconventional combat methods usually used against larger armies.',
      'story.algeria.h2':'What role did women play in the guerrilla movement?',
      'story.algeria.p2':'Women were vital to the guerrilla movement in Algeria because they were faced with less suspicion, so could draw less attention to themselves. Therefore, some women worked as spies, gathering important intelligence. Women also had contacts across households, which was useful in supporting underground movements and spreading information. Some women planted bombs, wearing Western clothing so they would go unnoticed.',
      'story.algeria.p2b':'However, women were also victims of gender violence, including rape by French soldiers. Some Muslim women were subjected to unveiling ceremonies, where women were forced to remove their haiks (a traditional veil), with the aim of humiliating communities.',
      'story.algeria.h3':'Why is it important to remember women\'s roles in the Algerian War?',
      'story.algeria.p3':'Independent Algeria adopted a form of social conservatism, where women played more traditional roles in society. The Algerian Family Code of 1984 required women to have a male guardian for marriage and gave men stronger rights over divorce and child custody. The framing of women as secondary is part of the reason their efforts in resistance have been overlooked, and why much of the focus has been centred around men. Women were praised for being mothers, helpers and supporters but in reality their roles in the struggle were much more hands-on.',
      /* kenya */
      'story.kenya.country':'Kenya',
      'story.kenya.title':'Women who kept resistance alive',
      'story.kenya.h1':'What was the Mau Mau Rebellion?',
      'story.kenya.p1':'In 1895, the United Kingdom declared rule over the \'East Africa Protectorate\', and in 1920 it became the \'Colony of Kenya\'. The 1915 Crown Land Ordinance limited non-white land ownership, and in 1926 the creation of the \'White Highlands\' excluded the native Kenyans from some of the country\'s most fertile land. This effectively forced Kenyans into working as tenant farmers. Driven by decades of this treatment, rebels known as the \'Mau Mau\' fought a guerrilla war against the British colonial forces from 1952–1960. Britain declared a state of emergency, and over 80,000 Kenyans were detained.',
      'story.kenya.h2':'What did women do?',
      'story.kenya.p2':'Mau Mau women played a vital role in recruitment, and oversaw oath-taking for the rebels. They supplied food, ammunition and intelligence to the fighters in the forests of Mount Kenya, and became the \'eyes and ears\' of the movement. Recently, historians have begun to note the critical role of women as armed combatants in the movement, serving both as bodyguards and fighters.',
      'story.kenya.h3':'Why have women\'s roles been overlooked?',
      'story.kenya.p3':'The extent of women\'s involvement was deliberately hidden for a long time. The initial British narrative portrayed Mau Mau as a violent, male insurgency, painting women as victims of \'male persuasion\'. In 2011, files which had been removed from Kenya after independence were uncovered, revealing the harsh treatment women faced in detention. It suited the British to divert attention away from women so as to not expose their horrific treatment of the female rebels. Post-independence, the new Kenyan state promoted the \'male hero\' narrative, to create a stronger image for the emerging nation. Even modern Kenyan projects have framed women as \'helpers\' rather than active participants.',
      /* contact */
      'contact.title':'Contact Us',
      'contact.intro':'We are actively looking to speak to women who have been involved in resistance movements, or their families and friends. If this applies to you, and you are interested in contributing to this project, please give some brief information in the form below.',
      'contact.label.name':'Name',
      'contact.placeholder.name':'Your name',
      'contact.label.contact':'Contact Details',
      'contact.placeholder.contact':'Email address or phone number',
      'contact.label.movement':'Name of Resistance Movement',
      'contact.placeholder.movement':'e.g. Mau Mau, FLN',
      'contact.label.person':'Name of Person Involved',
      'contact.placeholder.person':'Name of the person whose story you would like to share',
      'contact.label.overview':'Brief overview of what you would like to share',
      'contact.placeholder.overview':'Please give a short summary of the story or information you would like to contribute...',
      'contact.label.additional':'Additional Information',
      'contact.placeholder.additional':'Anything else you would like us to know...',
      'contact.submit':'Send message',
      'contact.success':'Thank you for getting in touch. We will review your message and be in contact soon.'
    },

    fr: {
      'toolbar.language':'Langue',
      'toolbar.listen':'Écouter la page',
      'toolbar.mapdesc':'Écouter la description de la carte',
      'toolbar.stop':'Arrêter l\'audio',
      'status.listening':'Lecture audio lancée.',
      'status.stopped':'Audio arrêté.',
      'status.lang.en':'Language set to English.',
      'status.lang.fr':'Langue changée en français.',
      'status.lang.ar':'تم تغيير اللغة إلى العربية.',
      'home.eyebrow':'Projet d\'histoire interactif',
      'home.title':'Femmes dans la résistance : une carte du monde des histoires oubliées',
      'home.intro':'Explorez deux pays où les femmes ont participé aux mouvements de résistance, soutenu les foyers et les communautés pendant les conflits, puis affronté de longues luttes pour être reconnues après l\'indépendance.',
      'home.mapHeading':'Cliquez sur un pays mis en évidence',
      'home.mapText':'Chaque lieu ouvre une courte page axée sur le rôle des femmes dans divers mouvements de résistance.',
      'home.legend':'Lieu de l\'histoire',
      'home.mapLongdesc':'La carte met en évidence l\'Algérie en Afrique du Nord et le Kenya en Afrique de l\'Est. Chaque pays mis en évidence peut être sélectionné au clavier ou à la souris pour ouvrir sa page.',
      'cards.algeria.kicker':'Algérie',
      'cards.algeria.title':'Les femmes oubliées dans la lutte anticoloniale',
      'cards.algeria.text':'Les femmes transportaient des messages, des armes et agissaient comme espionnes dans la lutte pour l\'indépendance. Leur courage les a exposées à des violences de genre de la part des colonisateurs français, et leurs histoires ont été écartées dans l\'ère post-indépendance.',
      'cards.kenya.kicker':'Kenya',
      'cards.kenya.title':'Les femmes qui ont maintenu la résistance.',
      'cards.kenya.text':'Les femmes kényanes ont aidé à organiser les rebelles Mau Mau, supervisant la logistique et les serments. Elles ont également joué des rôles de combat actifs, bien que l\'étendue de leur implication ait été cachée pendant des décennies.',
      'home.listHeading':'Histoires par pays',
      'home.listText':'Vous pouvez utiliser cette liste textuelle au lieu de la carte. Elle offre les mêmes destinations dans un format plus simple pour les lecteurs d\'écran.',
      'home.listAlgeria':'Algérie — les femmes dans la lutte anticoloniale',
      'home.listKenya':'Kenya — les femmes qui ont maintenu la résistance',
      'home.contact.prompt':'Avez-vous une histoire à partager ?',
      'home.contact.btn':'Contactez-nous',
      'story.back':'← Retour à la carte du monde',
      'story.calloutLabel':'Pourquoi cette histoire compte :',
      'story.algeria.country':'Algérie',
      'story.algeria.title':'Les femmes dans la lutte anticoloniale',
      'story.algeria.h1':'Qu\'était la guerre d\'Algérie ?',
      'story.algeria.p1':'La guerre d\'Algérie fut un conflit violent entre le Front de Libération Nationale (FLN) et le pouvoir colonial français, dans la lutte pour l\'indépendance de l\'Algérie. Elle dura 8 ans, de 1954 à 1962, et se termina par l\'indépendance de l\'Algérie. Le FLN utilisait des tactiques de guérilla : des méthodes de combat non conventionnelles à petite échelle, généralement employées contre de plus grandes armées.',
      'story.algeria.h2':'Quel rôle les femmes ont-elles joué dans le mouvement de guérilla ?',
      'story.algeria.p2':'Les femmes étaient essentielles au mouvement de guérilla en Algérie car elles suscitaient moins de méfiance et attiraient moins l\'attention. Certaines travaillaient donc comme espionnes, collectant des renseignements importants. Les femmes avaient aussi des contacts dans de nombreux foyers, ce qui était utile pour soutenir les mouvements clandestins et diffuser des informations. Certaines femmes posaient des bombes, vêtues de tenues occidentales pour passer inaperçues.',
      'story.algeria.p2b':'Cependant, les femmes étaient aussi victimes de violences de genre, notamment des viols commis par des soldats français. Certaines femmes musulmanes furent soumises à des cérémonies de dévoilement, où elles étaient forcées de retirer leur haïk (voile traditionnel), dans le but d\'humilier les communautés.',
      'story.algeria.h3':'Pourquoi est-il important de se souvenir du rôle des femmes dans la guerre d\'Algérie ?',
      'story.algeria.p3':'L\'Algérie indépendante adopta une forme de conservatisme social où les femmes occupaient des rôles plus traditionnels dans la société. Le Code de la famille algérien de 1984 exigea que les femmes aient un tuteur masculin pour le mariage et accorda aux hommes des droits plus étendus en matière de divorce et de garde des enfants. Le fait de considérer les femmes comme secondaires est en partie la raison pour laquelle leurs efforts de résistance ont été négligés et pourquoi l\'essentiel de l\'attention s\'est concentré sur les hommes. Les femmes étaient louées pour être des mères, des aides et des soutiens, mais en réalité leur rôle dans la lutte était bien plus actif.',
      'story.kenya.country':'Kenya',
      'story.kenya.title':'Les femmes qui ont maintenu la résistance',
      'story.kenya.h1':'Qu\'était la rébellion Mau Mau ?',
      'story.kenya.p1':'En 1895, le Royaume-Uni déclara son autorité sur le « Protectorat d\'Afrique de l\'Est », qui devint en 1920 la « Colonie du Kenya ». L\'ordonnance sur les terres de la Couronne de 1915 limita la propriété foncière des non-Blancs, et en 1926, la création des « Highlands Blanches » exclut les Kényans autochtones de certaines des terres les plus fertiles du pays, les forçant effectivement à travailler comme fermiers locataires. Portés par des décennies de cette situation, des rebelles connus sous le nom de « Mau Mau » menèrent une guerre de guérilla contre les forces coloniales britanniques de 1952 à 1960. La Grande-Bretagne déclara l\'état d\'urgence et plus de 80 000 Kényans furent détenus.',
      'story.kenya.h2':'Qu\'ont fait les femmes ?',
      'story.kenya.p2':'Les femmes Mau Mau jouèrent un rôle vital dans le recrutement et supervisèrent les serments des rebelles. Elles approvisionnèrent les combattants dans les forêts du mont Kenya en nourriture, munitions et renseignements, devenant les « yeux et les oreilles » du mouvement. Récemment, les historiens ont commencé à noter le rôle crucial des femmes en tant que combattantes armées dans le mouvement, servant à la fois de gardes du corps et de combattantes.',
      'story.kenya.h3':'Pourquoi le rôle des femmes a-t-il été négligé ?',
      'story.kenya.p3':'L\'étendue de l\'implication des femmes fut délibérément dissimulée pendant longtemps. Le récit britannique initial dépeignait les Mau Mau comme une insurrection masculine et violente, présentant les femmes comme victimes de la « persuasion masculine ». En 2011, des dossiers retirés du Kenya après l\'indépendance furent retrouvés, révélant le traitement brutal subi par les femmes en détention. Il convenait aux Britanniques de détourner l\'attention des femmes pour ne pas exposer leur traitement horrible des rebelles féminines. Après l\'indépendance, le nouvel État kényan promut le récit du « héros masculin » pour forger une image plus forte de la nation naissante. Même des projets kényans modernes ont présenté les femmes comme des « auxiliaires » plutôt que comme des participantes actives.',
      'contact.title':'Contactez-nous',
      'contact.intro':'Nous cherchons activement à parler à des femmes qui ont participé à des mouvements de résistance, ou à leurs familles et amis. Si cela vous concerne et que vous souhaitez contribuer à ce projet, veuillez nous donner quelques informations brèves dans le formulaire ci-dessous.',
      'contact.label.name':'Nom',
      'contact.placeholder.name':'Votre nom',
      'contact.label.contact':'Coordonnées',
      'contact.placeholder.contact':'Adresse e-mail ou numéro de téléphone',
      'contact.label.movement':'Nom du mouvement de résistance',
      'contact.placeholder.movement':'Ex. Mau Mau, FLN',
      'contact.label.person':'Nom de la personne concernée',
      'contact.placeholder.person':'Nom de la personne dont vous souhaitez partager l\'histoire',
      'contact.label.overview':'Bref aperçu de ce que vous souhaitez partager',
      'contact.placeholder.overview':'Veuillez donner un bref résumé de l\'histoire ou des informations que vous souhaitez apporter...',
      'contact.label.additional':'Informations supplémentaires',
      'contact.placeholder.additional':'Tout ce que vous souhaitez nous faire savoir...',
      'contact.submit':'Envoyer le message',
      'contact.success':'Merci de nous avoir contactés. Nous examinerons votre message et vous répondrons prochainement.'
    },

    ar: {
      'toolbar.language':'اللغة',
      'toolbar.listen':'استمع إلى الصفحة',
      'toolbar.mapdesc':'استمع إلى وصف الخريطة',
      'toolbar.stop':'إيقاف الصوت',
      'status.listening':'بدأ التشغيل الصوتي.',
      'status.stopped':'تم إيقاف الصوت.',
      'status.lang.en':'Language set to English.',
      'status.lang.fr':'Langue changée en français.',
      'status.lang.ar':'تم تغيير اللغة إلى العربية.',
      'home.eyebrow':'مشروع تاريخ تفاعلي',
      'home.title':'النساء في المقاومة: خريطة عالمية لقصص جرى تهميشها',
      'home.intro':'استكشفوا دولتين شاركت فيهما النساء في حركات المقاومة، وحافظن على البيوت والمجتمعات أثناء الصراع، ثم واجهن كفاحًا طويلًا من أجل الاعتراف بعد الاستقلال.',
      'home.mapHeading':'انقر على دولة مميزة',
      'home.mapText':'يفتح كل موقع صفحة قصيرة تُركّز على دور المرأة في مختلف حركات المقاومة.',
      'home.legend':'موقع القصة',
      'home.mapLongdesc':'تُبرز الخريطة الجزائر في شمال أفريقيا وكينيا في شرق أفريقيا. ويمكن اختيار كل دولة مميزة باستخدام لوحة المفاتيح أو الفأرة لفتح صفحتها.',
      'cards.algeria.kicker':'الجزائر',
      'cards.algeria.title':'النساء المنسيات في الكفاح ضد الاستعمار',
      'cards.algeria.text':'حملت النساء الرسائل ونقلن الأسلحة وعملن جاسوسات في النضال من أجل الاستقلال. جعل شجاعتهن عرضةً للعنف الجنسي على أيدي المستعمرين الفرنسيين، وجرى تهميش قصصهن في حقبة ما بعد الاستقلال.',
      'cards.kenya.kicker':'كينيا',
      'cards.kenya.title':'النساء اللواتي أبقين المقاومة حيّة.',
      'cards.kenya.text':'ساعدت النساء الكينيات في تنظيم متمردي الماو ماو، مشرفاتٍ على الخدمات اللوجستية وحفلات أداء القَسَم. كنّ فاعلاتٍ في أدوار قتالية أيضًا، وإن ظلّ حجم مشاركتهن مخفيًا لعقود.',
      'home.listHeading':'القصص حسب الدولة',
      'home.listText':'يمكنك استخدام هذه القائمة النصية بدلًا من الخريطة. فهي تقدم الوجهات نفسها بصيغة أسهل لقارئات الشاشة.',
      'home.listAlgeria':'الجزائر — النساء في الكفاح ضد الاستعمار',
      'home.listKenya':'كينيا — النساء اللواتي أبقين المقاومة حيّة',
      'home.contact.prompt':'هل لديك قصة تودّ مشاركتها؟',
      'home.contact.btn':'تواصلوا معنا',
      'story.back':'← العودة إلى خريطة العالم',
      'story.calloutLabel':'لماذا تهم هذه القصة:',
      'story.algeria.country':'الجزائر',
      'story.algeria.title':'النساء في الكفاح ضد الاستعمار',
      'story.algeria.h1':'ما هي حرب الجزائر؟',
      'story.algeria.p1':'كانت حرب الجزائر حربًا عنيفة بين جبهة التحرير الوطني (FLN) والحكم الاستعماري الفرنسي، في سبيل انتزاع استقلال الجزائر. استمرت ثماني سنوات من 1954 إلى 1962، وانتهت باستقلال الجزائر. استخدمت جبهة التحرير الوطني أساليب حرب العصابات، وهي طرق قتالية غير تقليدية على نطاق صغير تُستخدم عادةً في مواجهة الجيوش الأكبر.',
      'story.algeria.h2':'ما الدور الذي أدّته النساء في حركة حرب العصابات؟',
      'story.algeria.p2':'كانت النساء عنصرًا حيويًا في حركة حرب العصابات في الجزائر، إذ كنّ يثرن قدرًا أقل من الشك وبالتالي يجذبن انتباهًا أقل. لهذا عملت بعضهن كجاسوسات لجمع المعلومات الاستخباراتية. وكانت للنساء كذلك معارف في أوساط المنازل المختلفة، مما كان مفيدًا في دعم الحركات السرية ونشر المعلومات. وقامت بعض النساء بزرع القنابل، مرتديات ملابس غربية لتفادي الملاحظة.',
      'story.algeria.p2b':'غير أن النساء كنّ أيضًا ضحايا للعنف الجنسي، بما في ذلك الاغتصاب على يد الجنود الفرنسيين. وخضعت بعض النساء المسلمات لما يُسمى بـ"مراسم السفور"، حيث أُرغمت النساء على خلع حايكهن (الحجاب التقليدي)، بهدف إهانة المجتمعات.',
      'story.algeria.h3':'لماذا من المهم تذكّر دور النساء في حرب الجزائر؟',
      'story.algeria.p3':'تبنّت الجزائر المستقلة شكلًا من المحافظة الاجتماعية، حيث اضطلعت النساء بأدوار أكثر تقليدية في المجتمع. فرّض قانون الأسرة الجزائري لعام 1984 على المرأة الحصول على وليّ أمر ذكر للزواج، ومنح الرجال حقوقًا أوسع في الطلاق وحضانة الأطفال. إن تصوير المرأة باعتبارها ثانوية هو أحد الأسباب التي أدت إلى إغفال جهودها في المقاومة، وتمحور الاهتمام حول الرجال في الغالب. فقد مُدحت النساء لكونهن أمهات ومساعدات وداعمات، في حين كان دورهن الحقيقي في النضال أكثر مباشرة وفاعلية.',
      'story.kenya.country':'كينيا',
      'story.kenya.title':'النساء اللواتي أبقين المقاومة حيّة',
      'story.kenya.h1':'ما هي ثورة الماو ماو؟',
      'story.kenya.p1':'في عام 1895، أعلن المملكة المتحدة سيطرتها على "محمية أفريقيا الشرقية"، وفي عام 1920 أصبحت "مستعمرة كينيا". حدّ قانون أراضي التاج لعام 1915 من ملكية غير البيض للأراضي، وفي عام 1926 أبعد إنشاء "المرتفعات البيضاء" كينيين السكان الأصليين عن بعض أخصب أراضي البلاد، مما أجبرهم فعليًا على العمل كمزارعين مستأجرين. مدفوعين بعقود من هذا الوضع، خاض المتمردون المعروفون بـ"الماو ماو" حرب عصابات ضد القوات الاستعمارية البريطانية من 1952 إلى 1960. أعلنت بريطانيا حالة الطوارئ، واعتُقل أكثر من 80,000 كيني.',
      'story.kenya.h2':'ماذا فعلت النساء؟',
      'story.kenya.p2':'اضطلعت نساء الماو ماو بدور محوري في التجنيد، وأشرفن على حفلات أداء القَسَم للمتمردين. وأمدّدن المقاتلين في غابات جبل كينيا بالغذاء والذخيرة والمعلومات الاستخباراتية، فأصبحن "عيون وآذان" الحركة. وقد بدأ المؤرخون مؤخرًا في إبراز الدور المحوري للنساء بوصفهن مقاتلات مسلحات في الحركة، يعملن حارسات وقتالات في آنٍ معًا.',
      'story.kenya.h3':'لماذا أُهمل دور المرأة؟',
      'story.kenya.p3':'ظلّ حجم مشاركة النساء مخفيًا عمدًا لفترة طويلة. صوّرت الرواية البريطانية الأولية حركة الماو ماو باعتبارها تمردًا ذكوريًا عنيفًا، فيما قُدّمت النساء ضحايا "للإقناع الذكوري". وفي عام 2011، اكتُشفت ملفات كانت قد أُخرجت من كينيا عقب الاستقلال، كشفت عن المعاملة القاسية التي عانت منها النساء في مراكز الاحتجاز. كان من مصلحة البريطانيين صرف الأنظار عن النساء كي لا تُكشف معاملتهم المروّعة للمتمردات. وبعد الاستقلال، روّجت الدولة الكينية الجديدة لرواية "البطل الذكر" لبناء صورة أقوى للأمة الناشئة. حتى المشاريع الكينية الحديثة صوّرت النساء كـ"مساعدات" لا كمشاركات فاعلات.',
      'contact.title':'تواصلوا معنا',
      'contact.intro':'نسعى بنشاط إلى التحدث مع النساء اللواتي شاركن في حركات المقاومة، أو مع عائلاتهن وأصدقائهن. إن كان هذا ينطبق عليك وكنت مهتمًا بالمساهمة في هذا المشروع، يُرجى تزويدنا ببعض المعلومات الموجزة في النموذج أدناه.',
      'contact.label.name':'الاسم',
      'contact.placeholder.name':'اسمك',
      'contact.label.contact':'بيانات التواصل',
      'contact.placeholder.contact':'عنوان البريد الإلكتروني أو رقم الهاتف',
      'contact.label.movement':'اسم حركة المقاومة',
      'contact.placeholder.movement':'مثال: الماو ماو، جبهة التحرير الوطني',
      'contact.label.person':'اسم الشخص المعني',
      'contact.placeholder.person':'اسم الشخص الذي تودّ مشاركة قصته',
      'contact.label.overview':'نبذة مختصرة عمّا تودّ مشاركته',
      'contact.placeholder.overview':'يُرجى تقديم ملخص مختصر للقصة أو المعلومات التي تودّ المساهمة بها...',
      'contact.label.additional':'معلومات إضافية',
      'contact.placeholder.additional':'أي شيء آخر تودّ إطلاعنا عليه...',
      'contact.submit':'إرسال الرسالة',
      'contact.success':'شكرًا لتواصلك معنا. سنراجع رسالتك وسنتواصل معك قريبًا.'
    }
  };

  const langDirections = { en:'ltr', fr:'ltr', ar:'rtl' };
  const voicesFor = lang => ({en:['en-GB','en-US'], fr:['fr-FR','fr'], ar:['ar-SA','ar']})[lang] || ['en-GB'];

  function getLang(){ return localStorage.getItem('siteLang') || 'en'; }
  function setStatus(text){ const el=document.querySelector('.status-note'); if(el) el.textContent=text; }

  function setLang(lang){
    const dict = translations[lang] || translations.en;
    document.documentElement.lang = lang;
    document.documentElement.dir = langDirections[lang] || 'ltr';
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if(dict[key] !== undefined) el.textContent = dict[key];
    });
    /* update placeholders */
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      if(dict[key] !== undefined) el.placeholder = dict[key];
    });
    document.querySelectorAll('.lang-btn').forEach(btn =>
      btn.setAttribute('aria-pressed', String(btn.dataset.lang === lang))
    );
    const titleMap = {
      'index':'Women in Resistance | World Map Stories',
      'algeria':'Algeria | Women in Resistance',
      'kenya':'Kenya | Women in Resistance',
      'contact':'Contact Us | Women in Resistance'
    };
    const page = document.body.dataset.page || 'index';
    document.title = titleMap[page] || document.title;
    localStorage.setItem('siteLang', lang);
    setStatus(dict['status.lang.'+lang] || '');
  }

  function getReadableText(){
    const page = document.body.dataset.page || 'index';
    if(page === 'index'){
      return [
        document.querySelector('[data-i18n="home.title"]')?.textContent,
        document.querySelector('[data-i18n="home.intro"]')?.textContent,
        document.querySelector('#map-longdesc')?.textContent,
        ...Array.from(document.querySelectorAll('.story-card h3')).map(el => el.textContent),
        ...Array.from(document.querySelectorAll('.story-card p')).map(el => el.textContent),
        document.querySelector('[data-i18n="home.contact.prompt"]')?.textContent
      ].filter(Boolean).join('. ');
    }
    if(page === 'contact'){
      return [
        document.querySelector('[data-i18n="contact.title"]')?.textContent,
        document.querySelector('[data-i18n="contact.intro"]')?.textContent,
        ...Array.from(document.querySelectorAll('.form-group label')).map(el => el.textContent)
      ].filter(Boolean).join('. ');
    }
    /* algeria / kenya story pages */
    return Array.from(document.querySelectorAll('.story-hero h1, .story-hero p, .story-content h2, .story-content p'))
      .map(el => el.textContent).filter(Boolean).join('. ');
  }

  function speak(text){
    if(!('speechSynthesis' in window)){ setStatus('Speech is not supported in this browser.'); return; }
    window.speechSynthesis.cancel();
    const utter = new SpeechSynthesisUtterance(text);
    const lang = getLang();
    utter.lang = voicesFor(lang)[0];
    utter.rate = 1;
    window.speechSynthesis.speak(utter);
    setStatus((translations[lang]||translations.en)['status.listening']);
  }

  document.addEventListener('click', e => {
    const langBtn = e.target.closest('.lang-btn');
    if(langBtn){ setLang(langBtn.dataset.lang); return; }
    if(e.target.closest('.tts-btn')){ speak(getReadableText()); return; }
    if(e.target.closest('.map-desc-btn')){ speak(document.querySelector('#map-longdesc')?.textContent || ''); return; }
    if(e.target.closest('.stop-tts-btn')){
      if('speechSynthesis' in window) window.speechSynthesis.cancel();
      const lang = getLang();
      setStatus((translations[lang]||translations.en)['status.stopped']);
    }
  });

  document.addEventListener('DOMContentLoaded', () => setLang(getLang()));
})();
