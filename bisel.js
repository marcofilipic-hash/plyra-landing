    (function(){
      "use strict";

      /* ---------------------------------------------------------
         Respect prefers-reduced-motion for autoplay <video> elements
         (CSS can't stop a native autoplay/loop video) — pause on the
         first frame instead of leaving a blank box, so both the
         Projects and Proposal videos degrade gracefully.
      --------------------------------------------------------- */
      function initReducedMotionVideos(){
        if(!window.matchMedia || !window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
        var videos = Array.prototype.slice.call(document.querySelectorAll('video[autoplay]'));
        videos.forEach(function(v){
          v.removeAttribute('autoplay');
          v.pause();
        });
      }

      /* ---------------------------------------------------------
         Generic scroll-reveal for section content below the fold
      --------------------------------------------------------- */
      function initReveal(){
        var items = Array.prototype.slice.call(document.querySelectorAll('.reveal'));
        if(!items.length) return;
        if(!('IntersectionObserver' in window)){
          items.forEach(function(el){ el.classList.add('is-visible'); });
          return;
        }
        var io = new IntersectionObserver(function(entries){
          entries.forEach(function(entry){
            if(entry.isIntersecting){
              entry.target.classList.add('is-visible');
              io.unobserve(entry.target);
            }
          });
        }, { threshold: 0.15 });
        items.forEach(function(el){ io.observe(el); });
      }

      /* ---------------------------------------------------------
         Pre-screen wizard — a snapshot before the real (in-person)
         Interview, not a replacement for it (see PLYRA_master_brief
         §6). No backend yet, so submit hands off to mailto with all
         answers compiled into the body, same pattern the old
         single-screen contact form used.
      --------------------------------------------------------- */
      function initWizard(){
        var track = document.getElementById('wizard-track');
        if(!track) return;
        var steps = Array.prototype.slice.call(track.querySelectorAll('.wizard-step'));
        var totalQuestions = steps.filter(function(s){ return s.getAttribute('data-step') !== 'closing'; }).length;
        var progressLabel = document.getElementById('wizard-progress-label');
        var progressFill = document.getElementById('wizard-progress-fill');
        var progressWrap = document.querySelector('.wizard-progress');
        var nav = document.getElementById('wizard-nav');
        var backBtn = document.getElementById('wizard-back');
        var nextBtn = document.getElementById('wizard-next');

        var answers = {};
        var index = 0;

        // Choice buttons: single-select clears siblings, multi-select toggles.
        steps.forEach(function(step){
          var key = step.getAttribute('data-key');
          var type = step.getAttribute('data-type');
          if(!key || !type) return;
          if(type === 'multi') answers[key] = [];
          var choices = Array.prototype.slice.call(step.querySelectorAll('.wizard-choice, .wizard-choice-icon, .wizard-choice-photo'));
          choices.forEach(function(btn){
            btn.addEventListener('click', function(){
              var value = btn.getAttribute('data-value');
              if(type === 'single'){
                choices.forEach(function(b){ b.classList.remove('active'); });
                btn.classList.add('active');
                answers[key] = value;
              } else {
                btn.classList.toggle('active');
                var list = answers[key] || [];
                var pos = list.indexOf(value);
                if(btn.classList.contains('active')){
                  if(pos === -1) list.push(value);
                } else if(pos !== -1){
                  list.splice(pos, 1);
                }
                answers[key] = list;
              }
            });
          });
        });

        function collectTextStep(step){
          var key = step.getAttribute('data-key');
          if(!key) return;
          var inputs = Array.prototype.slice.call(step.querySelectorAll('input, textarea'));
          if(!inputs.length) return;
          if(inputs.length === 1){
            answers[key] = inputs[0].value.trim();
          } else {
            var obj = {};
            inputs.forEach(function(input){ obj[input.id] = input.value.trim(); });
            answers[key] = obj;
          }
        }

        function render(){
          track.style.transform = 'translateX(-' + (index * 100) + '%)';
          var onClosing = steps[index].getAttribute('data-step') === 'closing';

          if(onClosing){
            progressWrap.style.display = 'none';
            nav.style.display = 'none';
          } else {
            progressWrap.style.display = '';
            nav.style.display = '';
            var stepNum = index + 1;
            progressLabel.textContent = 'Step ' + (stepNum < 10 ? '0' : '') + stepNum + ' / ' + totalQuestions;
            progressFill.style.width = (stepNum / totalQuestions * 100) + '%';
            backBtn.classList.toggle('is-visible', index > 0);
            nextBtn.textContent = stepNum === totalQuestions ? 'Submit' : 'Next';
          }
        }

        function submitWizard(){
          var lines = [
            'Project type: ' + (answers.projectType || '—'),
            'Layout shape: ' + (answers.layoutShape || '—'),
            'Finish: ' + (answers.finish || '—'),
            'Location: ' + (answers.location || '—'),
            'Stage: ' + (answers.stage || '—'),
            'Timeline: ' + (answers.timeline || '—'),
            'Budget: ' + (answers.budget || '—'),
            'Approx. size: ' + (answers.size || '—'),
            'Style / materials: ' + (answers.style || '—'),
            'What matters most: ' + ((answers.priorities || []).join(', ') || '—'),
            'Project notes: ' + (answers.project || '—')
          ];
          var contact = answers.contact || {};
          var name = (contact['wz-name'] || '').trim();
          var email = (contact['wz-email'] || '').trim();
          var phone = (contact['wz-phone'] || '').trim();
          lines.push('Phone / Instagram: ' + (phone || '—'));

          var subject = encodeURIComponent('New enquiry from ' + (name || 'the BISEL site'));
          var body = encodeURIComponent(lines.join('\n') + '\n\n— ' + name + ' (' + email + ')');
          window.location.href = 'mailto:hello@bisel.studio?subject=' + subject + '&body=' + body;
        }

        nextBtn.addEventListener('click', function(){
          var step = steps[index];
          collectTextStep(step);

          if(step.getAttribute('data-key') === 'contact'){
            var nameInput = step.querySelector('#wz-name');
            var emailInput = step.querySelector('#wz-email');
            if(!nameInput.reportValidity() || !emailInput.reportValidity()) return;
            submitWizard();
          }

          index++;
          render();
        });

        backBtn.addEventListener('click', function(){
          if(index > 0){
            index--;
            render();
          }
        });

        render();
      }


      document.addEventListener('DOMContentLoaded', function(){
        initReducedMotionVideos();
        initReveal();
        initWizard();
      });
    })();
