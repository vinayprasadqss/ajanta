
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == popupForm) {
        popupForm.style.display = "none";
    }
}

$(document).ready(function () {
    function updateText(translations) {
        $('#home-menu').text(translations.home);
        $('#all-about-vitiligo').text(translations.all_about_vitiligo);
        $('#living-with-vitiligo').text(translations.living_with_vitiligo);
        $('#did-you-know').text(translations.did_you_know);
        $('#our-initiatives').text(translations.our_initiatives);
        $('#contact-us').text(translations.contact_us);
        $('#sign-symptoms').text(translations.sign_symptoms);
        $('#causes-menu').text(translations.causes);
        $('#diagnosis-menu').text(translations.diagnosis);
        $('#complications-menu').text(translations.complications);
        $('#treatment-menu').text(translations.treatment);
        $('#diet-menu').text(translations.diet);
        $('#makeup-menu').text(translations.makeup);
        $('#yoga-menu').text(translations.yoga);
        $('#stress-menu').text(translations.stress);
        $('#myths-facts-menu').text(translations.myths_facts);
        $('#dos-donts-menu').text(translations.dos_donts);
        $('#faqs-menu').text(translations.faqs);

        $('#connect_with_us').text(translations.connect_with_us);
        $('#please_write').text(translations.please_write);
        $('#agreeText').text(translations.agreeText);

        $('#submitText').text(translations.submitText);


        $('#banner1Text').text(translations.banner1Text);

        $('#about_heading').text(translations.about_heading);
        $('#about_paragraph').text(translations.about_paragraph);
        $('#about_sign_symptoms').text(translations.about_sign_symptoms);
        $('#about_causes').text(translations.about_causes);
        $('#about_diagnosis').text(translations.about_diagnosis);
        $('#about_treatment').text(translations.about_treatment);
        $('#about_complications').text(translations.about_complications);

        $('#sign_vitiligo_early_signs').text(translations.sign_vitiligo_early_signs);
        $('#sign_vitiligo_early_signs_desc').text(translations.sign_vitiligo_early_signs_desc);
        $('#sign_Early_1').text(translations.sign_Early_1);
        $('#sign_Early_2').text(translations.sign_Early_2);
        $('#sign_Early_3').text(translations.sign_Early_3);
        $('#sign_Early_4').text(translations.sign_Early_4);
        $('#sign_Early_5').text(translations.sign_Early_5);
        $('#sign_Early_6').text(translations.sign_Early_6);
        $('#sign_Early_7').text(translations.sign_Early_7);
        $('#sign_Early_8').text(translations.sign_Early_8);
        $('#sign_Early_9').text(translations.sign_Early_9);
        $('#sign_lip_vitiligo').text(translations.sign_lip_vitiligo);
        $('#sign_vitiligo_symptoms').text(translations.sign_vitiligo_symptoms);
        $('#sign_vitiligo_symptoms_sub').text(translations.sign_vitiligo_symptoms_sub);
        $('#sign_usually_1').text(translations.sign_usually_1);
        $('#sign_usually_2').text(translations.sign_usually_2);
        $('#sign_usually_3').text(translations.sign_usually_3);
        $('#sign_usually_4').text(translations.sign_usually_4);
        $('#sign_different_types').text(translations.sign_different_types);
        $('#sign_types_desc').text(translations.sign_types_desc);
        $('#sign_segmental').text(translations.sign_segmental);
        $('#sign_segmental_1').text(translations.sign_segmental_1);
        $('#sign_segmental_2').text(translations.sign_segmental_2);
        $('#sign_segmental_3').text(translations.sign_segmental_3);
        $('#sign_non_segmental').text(translations.sign_non_segmental);
        $('#sign_non_segmental_p1').text(translations.sign_non_segmental_p1);
        $('#sign_non_segmental_p2').text(translations.sign_non_segmental_p2);
        $('#sign_non_segmental_1').text(translations.sign_non_segmental_1);
        $('#sign_non_segmental_2').text(translations.sign_non_segmental_2);
        $('#sign_non_segmental_3').text(translations.sign_non_segmental_3);
        $('#sign_non_segmental_4').text(translations.sign_non_segmental_4);
        $('#sign_localized').text(translations.sign_localized);
        $('#sign_focal').text(translations.sign_focal);
        $('#sign_segmental_other').text(translations.sign_segmental_other);
        $('#sign_generlized').text(translations.sign_generlized);
        $('#sign_generlized_1').text(translations.sign_generlized_1);
        $('#sign_generlized_2').text(translations.sign_generlized_2);
        $('#sign_generlized_3').text(translations.sign_generlized_3);


        $('#causes_heading').text(translations.causes_heading);
        $('#causes_p').text(translations.causes_p);
        $('#causes_1').text(translations.causes_1);
        $('#causes_2').text(translations.causes_2);
        $('#causes_3').text(translations.causes_3);
        $('#causes_4').text(translations.causes_4);
        $('#causes_5').text(translations.causes_5);
        $('#causes_6').text(translations.causes_6);
        $('#causes_7').text(translations.causes_7);
        $('#causes_8').text(translations.causes_8);
        $('#causes_8_2').text(translations.causes_8_2);

        $('#diag_heading').text(translations.diag_heading);
        $('#diag_p1').text(translations.diag_p1);
        $('#diag_p2').text(translations.diag_p2);
        $('#diag_p3').text(translations.diag_p3);
        $('#diag_p4').text(translations.diag_p4);

        $('#compl_heading').text(translations.compl_heading);
        $('#compl_p0').text(translations.compl_p0);
        $('#compl_p1').text(translations.compl_p1);
        $('#compl_p2').text(translations.compl_p2);
        $('#compl_p3').text(translations.compl_p3);
        $('#compl_p4').text(translations.compl_p4);

        $('#treat_heading').text(translations.treat_heading);
        $('#treat_1').text(translations.treat_1);
        $('#treat_2').text(translations.treat_2);
        $('#treat_3').text(translations.treat_3);
        $('#treat_4').text(translations.treat_4);
        $('#treat_5').text(translations.treat_5);
        $('#treat_6').text(translations.treat_6);
        $('#treat_7').text(translations.treat_7);
        $('#treat_8').text(translations.treat_8);

        $('#living_heading').text(translations.living_heading);
        $('#living_p1').text(translations.living_p1);
        $('#living_button_1').text(translations.living_button_1);
        $('#living_button_2').text(translations.living_button_2);
        $('#living_button_3').text(translations.living_button_3);
        $('#living_button_4').text(translations.living_button_4);
        $('#living_heading_1').text(translations.living_heading_1);
        $('#living_p2').text(translations.living_p2);
        $('#living_p3').text(translations.living_p3);
        $('#living_p4').text(translations.living_p4);
        $('#living_p5').text(translations.living_p5);
        $('#living_p6').text(translations.living_p6);
        $('#living_p7').text(translations.living_p7);

        $('#diet_heading').text(translations.diet_heading);
        $('#diet_sub_heading').text(translations.diet_sub_heading);
        $('#diet_strong1').text(translations.diet_strong1);
        $('#diet_strong2').text(translations.diet_strong2);
        $('#diet_strong3').text(translations.diet_strong3);
        $('#diet_heading2').text(translations.diet_heading2);
        $('#diet_p1').text(translations.diet_p1);
        $('#diet_p2').text(translations.diet_p2);
        $('#diet_p3').text(translations.diet_p3);
        $('#diet_p4').text(translations.diet_p4);
        $('#diet_p5').text(translations.diet_p5);
        $('#diet_p6').text(translations.diet_p6);
        $('#diet_p7').text(translations.diet_p7);
        $('#diet_p8').text(translations.diet_p8);
        $('#diet_p9').text(translations.diet_p9);
        $('#diet_p10').text(translations.diet_p10);
        $('#diet_p11').text(translations.diet_p11);

        $('#makeup_heading').text(translations.makeup_heading);
        $('#makeup_p0').text(translations.makeup_p0);
        $('#makeup_p1').text(translations.makeup_p1);
        $('#makeup_p2').text(translations.makeup_p2);
        $('#makeup_p3').text(translations.makeup_p3);
        $('#makeup_p4').text(translations.makeup_p4);
        $('#makeup_p5').text(translations.makeup_p5);
        $('#makeup_p6').text(translations.makeup_p6);
        $('#makeup_p7').text(translations.makeup_p7);
        $('#makeup_p8').text(translations.makeup_p8);
        $('#makeup_p9').text(translations.makeup_p9);
        $('#makeup_p10').text(translations.makeup_p10);
        $('#makeup_p11').text(translations.makeup_p11);
        $('#makeup_p12').text(translations.makeup_p12);
        $('#makeup_p13').text(translations.makeup_p13);
        $('#makeup_p14').text(translations.makeup_p14);
        $('#makeup_p15').text(translations.makeup_p15);
        
        $('#cover_heading').text(translations.cover_heading);
        $('#cover_p0').text(translations.cover_p0);
        $('#cover_p1').text(translations.cover_p1);
        $('#cover_p2').text(translations.cover_p2);
        $('#cover_p3').text(translations.cover_p3);
        $('#cover_p4').text(translations.cover_p4);
        $('#cover_p5').text(translations.cover_p5);
        $('#cover_p6').text(translations.cover_p6);

        $('#yoga_heading').text(translations.yoga_heading);
        $('#yoga_p0').text(translations.yoga_p0);
        $('#yoga_p1').text(translations.yoga_p1);
        $('#yoga_p2').text(translations.yoga_p2);
        $('#yoga_p3').text(translations.yoga_p3);
        $('#yoga_p4').text(translations.yoga_p4);
        $('#yoga_p5').text(translations.yoga_p5);
        $('#yoga_p6').text(translations.yoga_p6);
        $('#yoga_p7').text(translations.yoga_p7);
        $('#yoga_p8').text(translations.yoga_p8);
        $('#yoga_p9').text(translations.yoga_p9);
        $('#yoga_p10').text(translations.yoga_p10);
        $('#yoga_p11').text(translations.yoga_p11);
        $('#yoga_p12').text(translations.yoga_p12);
        $('#yoga_p13').text(translations.yoga_p13);
        $('#yoga_p14').text(translations.yoga_p14);
        $('#yoga_p15').text(translations.yoga_p15);
        $('#yoga_p16').text(translations.yoga_p16);
        $('#yoga_p17').text(translations.yoga_p17);
        $('#yoga_p18').text(translations.yoga_p18);
        $('#yoga_p19').text(translations.yoga_p19);
        $('#yoga_p20').text(translations.yoga_p20);
        $('#yoga_p21').text(translations.yoga_p21);
        $('#yoga_p22').text(translations.yoga_p22);
        $('#yoga_p23').text(translations.yoga_p23);
        $('#yoga_p24').text(translations.yoga_p24);
        $('#yoga_p25').text(translations.yoga_p25);
        $('#yoga_p26').text(translations.yoga_p26);
        $('#yoga_p27').text(translations.yoga_p27);
        $('#yoga_p28').text(translations.yoga_p28);
        $('#yoga_p29').text(translations.yoga_p29);
        $('#yoga_p30').text(translations.yoga_p30);
        $('#yoga_p31').text(translations.yoga_p31);
        $('#yoga_p32').text(translations.yoga_p32);
        $('#yoga_p33').text(translations.yoga_p33);
        $('#yoga_p34').text(translations.yoga_p34);
        $('#yoga_p35').text(translations.yoga_p35);
        $('#yoga_p36').text(translations.yoga_p36);
        $('#yoga_p37').text(translations.yoga_p37);
        $('#yoga_p38').text(translations.yoga_p38);
        $('#yoga_p39').text(translations.yoga_p39);
        $('#yoga_p40').text(translations.yoga_p40);
        $('#yoga_p41').text(translations.yoga_p41);
        $('#yoga_p42').text(translations.yoga_p42);
        $('#yoga_p43').text(translations.yoga_p43);
        $('#yoga_p44').text(translations.yoga_p44);
        $('#yoga_p45').text(translations.yoga_p45);
        $('#yoga_p46').text(translations.yoga_p46);
        $('#yoga_p47').text(translations.yoga_p47);
        $('#yoga_p48').text(translations.yoga_p48);
        $('#yoga_p49').text(translations.yoga_p49);
        $('#yoga_p50').text(translations.yoga_p50);
        $('#yoga_p51').text(translations.yoga_p51);
        $('#yoga_p52').text(translations.yoga_p52);
        $('#yoga_p53').text(translations.yoga_p53);
        $('#yoga_p54').text(translations.yoga_p54);
        $('#yoga_p55').text(translations.yoga_p55);
        $('#yoga_p56').text(translations.yoga_p56);
        $('#yoga_p57').text(translations.yoga_p57);
        $('#yoga_p58').text(translations.yoga_p58);
        $('#yoga_p59').text(translations.yoga_p59);
        $('#yoga_p60').text(translations.yoga_p60);
        $('#yoga_p61').text(translations.yoga_p61);
        $('#yoga_p62').text(translations.yoga_p62);
        $('#yoga_p63').text(translations.yoga_p63);
        $('#yoga_p64').text(translations.yoga_p64);
        $('#yoga_p65').text(translations.yoga_p65);
        $('#yoga_p66').text(translations.yoga_p66);
        $('#yoga_p67').text(translations.yoga_p67);
        
        $('#stress_heading').text(translations.stress_heading);
        $('#stress_p0').text(translations.stress_p0);
        $('#stress_p1').text(translations.stress_p1);
        $('#stress_p2').text(translations.stress_p2);
        $('#stress_p3').text(translations.stress_p3);
        $('#stress_p4').text(translations.stress_p4);
        $('#stress_p5').text(translations.stress_p5);
        $('#stress_p6').text(translations.stress_p6);
        $('#stress_p7').text(translations.stress_p7);
        $('#stress_p8').text(translations.stress_p8);
        $('#stress_p9').text(translations.stress_p9);
        $('#stress_p10').text(translations.stress_p10);
        $('#stress_p11').text(translations.stress_p11);
        
        $('#didyou_p0').text(translations.didyou_p0);
        $('#didyou_p1').text(translations.didyou_p1);
        $('#didyou_p2').text(translations.didyou_p2);
        $('#didyou_p3').text(translations.didyou_p3);
        $('#didyou_p4').text(translations.didyou_p4);

        $('#myth_heading').text(translations.myth_heading);
        $('#myth_p0').text(translations.myth_p0);
        $('#myth_p1').text(translations.myth_p1);
        $('#myth_p2').text(translations.myth_p2);
        $('#myth_p3').text(translations.myth_p3);
        $('#myth_p4').text(translations.myth_p4);
        $('#myth_p5').text(translations.myth_p5);
        $('#myth_p6').text(translations.myth_p6);
        $('#myth_p7').text(translations.myth_p7);
        $('#myth_p8').text(translations.myth_p8);
        $('#myth_p9').text(translations.myth_p9);

        $('#do_heading').text(translations.do_heading);
        $('#do_p0').text(translations.do_p0);
        $('#do_p1').text(translations.do_p1);
        $('#do_p2').text(translations.do_p2);
        $('#do_p3').text(translations.do_p3);
        $('#do_p4').text(translations.do_p4);
        $('#do_p5').text(translations.do_p5);
        $('#do_p6').text(translations.do_p6);
        $('#do_p7').text(translations.do_p7);

        $('#faqs_heading').text(translations.faqs_heading);
        $('#faqs_p0').text(translations.faqs_p0);
        $('#faqs_p1').text(translations.faqs_p1);
        $('#faqs_p2').text(translations.faqs_p2);
        $('#faqs_p3').text(translations.faqs_p3);
        $('#faqs_p4').text(translations.faqs_p4);
        $('#faqs_p5').text(translations.faqs_p5);

        $('#slider_p0').text(translations.slider_p0);
        $('#slider_p1').text(translations.slider_p1);
        $('#slider_p2').text(translations.slider_p2);
        $('#slider_p3').text(translations.slider_p3);
        $('#slider_p4').text(translations.slider_p4);
        $('#slider_p5').text(translations.slider_p5);
        $('#slider_p6').text(translations.slider_p6);
        $('#slider_p7').text(translations.slider_p7);
        $('#slider_p8').text(translations.slider_p8);
        $('#slider_p9').text(translations.slider_p9);
        $('#slider_p10').text(translations.slider_p10);

        $('#footer_p0').text(translations.footer_p0);
        $('#footer_p1').text(translations.footer_p1);
        $('#footer_p2').text(translations.footer_p2);
        $('#footer_p3').text(translations.footer_p3);
        $('#footer_p4').text(translations.footer_p4);
        $('#footer_p5').text(translations.footer_p5);
        $('#footer_p6').text(translations.footer_p6);
        $('#footer_p7').text(translations.footer_p7);
        $('#footer_p8').text(translations.footer_p8);
        $('#footer_p9').text(translations.footer_p9);
        $('#footer_p10').text(translations.footer_p10);
        $('#footer_p11').text(translations.footer_p11);
        $('#footer_p12').text(translations.footer_p12);
        $('#footer_p13').text(translations.footer_p13);
        $('#footer_p14').text(translations.footer_p14);
        $('#footer_p15').text(translations.footer_p15);
        $('#footer_p16').text(translations.footer_p16);
        $('#footer_p17').text(translations.footer_p17);
        $('#footer_p18').text(translations.footer_p18);
        $('#footer_p19').text(translations.footer_p19);
        $('#footer_p20').text(translations.footer_p20);
        
        document.getElementById('message').placeholder = translations.message;
        document.getElementById('phone').placeholder = translations.phone;
    }

    // Load translations from JSON file
    $.getJSON('assets/js/translations.json', function (data) {
        console.log("dfdsfss",data.english);

        // Set default language
        updateText(data.english);

        // Change language on dropdown change
        $('#language-switcher').on('change', function () {
            const selectedLang = $(this).val();
            $("body").removeClass();
            $("body").addClass(selectedLang+"-lang");
            updateText(data[selectedLang]);
        });
    });
});