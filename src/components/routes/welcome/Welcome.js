import React from 'react';
import classes from './Welcome.module.scss';
import { Abelton, deeJay } from '../../../components/UI/photo/index';
import { Button } from '../../UI/button/Button';

export const Welcome = () => {
	return (
		<div>
			<section className={classes.section_welcome_background}>
				<div className="container">
					<div className="flex-center">
						<div className={classes.center_piece}>
							<p>synthetic_sound</p>
							<div className={classes.button_wrapper}>
								<Button btnType="button">Let's start</Button>
							</div>
						</div>
					</div>
					<div className={classes.box}>
						<span />
						<span />
						<span />
					</div>
				</div>
			</section>
			<section className={classes.section_projects}>
				<div>
					<div className="container">
						<div className={classes.title_container}>
							<div className={classes.title_block}>
								<h2>My process</h2>
							</div>
						</div>
						<div className={classes.project_container}>
							<div className="flex-center">
								<div className={classes.step}>
									<div className={classes.img}>
										<img src="https://images.unsplash.com/photo-1514580426463-fd77dc4d0672?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80" />
									</div>
									<div className={classes.step_text}>
										<span>Listen</span>
										<h2>Find Music</h2>
										<h3>Record</h3>
									</div>
								</div>
								<div className={classes.step} />
								<div className={classes.step} />
							</div>
						</div>
					</div>
				</div>
			</section>
			<section>
				<div>
					<button>Play</button>
				</div>
			</section>
			<section className={classes.section_aboutMe}>
				<h1>About me</h1>
				<h4>Tools I use</h4>
				<div>
					<div>
						<Abelton width="150px" />
						<deeJay />
					</div>
				</div>
			</section>
		</div>
	);
};
